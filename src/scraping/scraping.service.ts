import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { CreateHadithDto } from 'src/hadith/dtos/CreateHadith.dto';
import { HadithService } from 'src/hadith/hadith.service';

@Injectable()
export class ScrapingService {
  private readonly baseUrl = 'https://api.sunnahenc.com/api/v1/hadith-by-id/';
  private readonly delay = 1000;

  constructor(private readonly hadithService: HadithService) {}

  async scrapeHadith(hadithId: number) {
    const response = await axios.get(`${this.baseUrl}${hadithId}?lang=ar`);
    const hadithData = response.data;

    await this.saveHadith(hadithData.data);

    if (hadithData.similar && hadithData.similar.length > 0) {
      for (const similar of hadithData.similar) {
        await this.saveHadith(similar);
      }
    }
    await this.delayRequest();

    const nextHadithId = hadithData.next_hadith_id;
    if (nextHadithId) {
      await this.scrapeHadith(nextHadithId);
    }
  }

  private async saveHadith(hadithData: any) {
    const hadith: CreateHadithDto = {
      hadith_no: hadithData.hadith_no,
      hadith_text: hadithData.hadith_text || ' ',
      maqsad_id: hadithData.maqsad_id,
      maqsad_name: hadithData.maqsad_name,
      ketab_name: hadithData.ketab_name,
      ketab_title: hadithData.ketab_title,
      category_id: hadithData.category_id,
      category_name: hadithData.category_name,
      hukm: hadithData.hukm,
      reference: hadithData.reference,
      footnotes: hadithData.footnotes,
    };

    // Save the Hadith to the database
    await this.hadithService.create(hadith);
  }

  private delayRequest() {
    return new Promise((resolve) => setTimeout(resolve, this.delay));
  }
}
