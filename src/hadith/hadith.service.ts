import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, QueryOptions } from 'mongoose';
import { AddNoteDto } from './dtos/addNote.dto';
import { CreateHadithDto } from './dtos/CreateHadith.dto';
import { FindCategoriesDto } from './dtos/FindCategories.dto';
import { FindHadithsDto } from './dtos/FindHadith.dto';
import { SetPageLimit } from './dtos/setPageLimit.dto';
import { FavHadith } from './entities/fav.entity';
import { Hadith } from './entities/hadith.entity';
import { LastVisitedHadith } from './entities/lastVisitedHadith.entity';
import { Maqsad } from './entities/maqsad.entity';
import { Note } from './entities/notes.entity';
@Injectable()
export class HadithService {
  constructor(
    @InjectModel(Hadith.name) private hadithModel: Model<Hadith>,
    @InjectModel(Maqsad.name) private maqsadModel: Model<Maqsad>,
    @InjectModel(Note.name) private Note: Model<Note>,
    @InjectModel(FavHadith.name) private FavHadith: Model<FavHadith>,
    @InjectModel(LastVisitedHadith.name)
    private lastVisitedHadith: Model<LastVisitedHadith>,
  ) {}

  async create(createHadithDto: CreateHadithDto) {
    const hadith = new this.hadithModel(createHadithDto);
    await hadith.save();
  }

  async seed() {
    const maqsadsData = [
      {
        _id: 20,
        icon: 'https://api.sunnahenc.com/images/001.svg',
        short_title: ' العقيدة',
        title: 'المقصد الأول: العقيدة',
        ketab: [
          {
            _id: 95,
            maqsad_id: 20,
            title: 'الإسلام والإيمان',
          },
          {
            _id: 96,
            maqsad_id: 20,
            title: 'الإيمان باليوم الآخر',
          },
          {
            _id: 97,
            maqsad_id: 20,
            title: 'الإِيمان بالقدر',
          },
        ],
      },
      {
        _id: 21,
        icon: 'https://api.sunnahenc.com/images/002.svg',
        short_title: ' العلم ومصادره',
        title: 'المقصد الثاني: العلم ومصادره',
        ketab: [
          {
            _id: 98,
            maqsad_id: 21,
            title: 'العلم',
          },
          {
            _id: 99,
            maqsad_id: 21,
            title: 'جمع القرآن وفضائله',
          },
          {
            _id: 100,
            maqsad_id: 21,
            title: 'التفسير',
          },
          {
            _id: 101,
            maqsad_id: 21,
            title: 'الاعتصام بالسنة',
          },
        ],
      },
      {
        _id: 22,
        icon: 'https://api.sunnahenc.com/images/003.svg',
        short_title: ' العبادات',
        title: 'المقصد الثالث: العبادات',
        ketab: [
          {
            _id: 102,
            maqsad_id: 22,
            title: 'الطَّهـارة',
          },
          {
            _id: 103,
            maqsad_id: 22,
            title: 'الأذان ومواقيت الصلاة',
          },
          {
            _id: 104,
            maqsad_id: 22,
            title: 'المساجد ومواضع الصلاة',
          },
          {
            _id: 105,
            maqsad_id: 22,
            title: 'فضل الصلاة ومقدماتها وصفتها',
          },
          {
            _id: 106,
            maqsad_id: 22,
            title: 'صلاة التطوع والوتر',
          },
          {
            _id: 107,
            maqsad_id: 22,
            title: 'الإِمامة والجماعة',
          },
          {
            _id: 108,
            maqsad_id: 22,
            title: 'صلاة الجمعة والعيدين والكسوف والاستسقاء والخوف',
          },
          {
            _id: 109,
            maqsad_id: 22,
            title: 'قصر الصلاة وجمعها وأَحكام السفر',
          },
          {
            _id: 110,
            maqsad_id: 22,
            title: 'الجنائز',
          },
          {
            _id: 111,
            maqsad_id: 22,
            title: 'الزكاة والصدقات',
          },
          {
            _id: 112,
            maqsad_id: 22,
            title: 'الصوم',
          },
          {
            _id: 113,
            maqsad_id: 22,
            title: 'الحج والعمرة',
          },
          {
            _id: 114,
            maqsad_id: 22,
            title: 'الجهاد في سبيل الله تعالىٰ',
          },
          {
            _id: 115,
            maqsad_id: 22,
            title: 'الذكر والدعاء والتوبة',
          },
          {
            _id: 116,
            maqsad_id: 22,
            title: 'الأَيمان والنذور',
          },
        ],
      },
      {
        _id: 23,
        icon: 'https://api.sunnahenc.com/images/004.svg',
        short_title: ' أحكام الأسرة',
        title: 'المقصد الرابع: أحكام الأسرة',
        ketab: [
          {
            _id: 117,
            maqsad_id: 23,
            title: 'النكاح',
          },
          {
            _id: 118,
            maqsad_id: 23,
            title: 'الرضاع',
          },
          {
            _id: 119,
            maqsad_id: 23,
            title: 'الطلاق وأَحكام مفارقة الزوجة',
          },
          {
            _id: 120,
            maqsad_id: 23,
            title: 'أَحكام المولود',
          },
          {
            _id: 121,
            maqsad_id: 23,
            title: 'الميراث والوصايا',
          },
          {
            _id: 122,
            maqsad_id: 23,
            title: 'البرُّ والصلة بين أَفراد الأسرة',
          },
        ],
      },
      {
        _id: 24,
        icon: 'https://api.sunnahenc.com/images/005.svg',
        short_title: ' الحاجات الضرورية',
        title: 'المقصد الخامس: الحاجات الضرورية',
        ketab: [
          {
            _id: 123,
            maqsad_id: 24,
            title: 'الطعام والشراب',
          },
          {
            _id: 124,
            maqsad_id: 24,
            title: 'اللباس والزينة',
          },
          {
            _id: 125,
            maqsad_id: 24,
            title: 'الطب والرؤيا',
          },
          {
            _id: 126,
            maqsad_id: 24,
            title: 'ما جاء في البيوت',
          },
          {
            _id: 127,
            maqsad_id: 24,
            title: 'الأمـن',
          },
          {
            _id: 128,
            maqsad_id: 24,
            title: 'الحاجات الأساسية المشتركة',
          },
        ],
      },
      {
        _id: 25,
        icon: 'https://api.sunnahenc.com/images/006.svg',
        short_title: ' المعاملات',
        title: 'المقصد السادس: المعاملات',
        ketab: [
          {
            _id: 129,
            maqsad_id: 25,
            title: 'البيوع',
          },
        ],
      },
      {
        _id: 26,
        icon: 'https://api.sunnahenc.com/images/007.svg',
        short_title: ' الإمامة وشؤون الحكم',
        title: 'المقصد السابـع: الإمامة وشؤون الحكم',
        ketab: [
          {
            _id: 130,
            maqsad_id: 26,
            title: 'الـقـضـاء',
          },
          {
            _id: 131,
            maqsad_id: 26,
            title: 'الـجنايات والـديات',
          },
          {
            _id: 132,
            maqsad_id: 26,
            title: 'الـحـدود',
          },
        ],
      },
      {
        _id: 27,
        icon: 'https://api.sunnahenc.com/images/008.svg',
        short_title: ' الرقائق والأخلاق والآداب',
        title: 'المقصد الثامن: الرقائق والأخلاق والآداب',
        ketab: [
          {
            _id: 133,
            maqsad_id: 27,
            title: 'الـرقـائـق',
          },
          {
            _id: 134,
            maqsad_id: 27,
            title: 'الأَخـلاق والآداب',
          },
        ],
      },
      {
        _id: 28,
        icon: 'https://api.sunnahenc.com/images/009.svg',
        short_title: ' التاريخ والسيرة والمناقب',
        title: 'المقصد التاسع: التاريخ والسيرة والمناقب',
        ketab: [
          {
            _id: 135,
            maqsad_id: 28,
            title: 'الأَنبياء',
          },
          {
            _id: 136,
            maqsad_id: 28,
            title: 'السيرة النبوية الشريفة',
          },
          {
            _id: 137,
            maqsad_id: 28,
            title: 'الشمائل الشريفة',
          },
          {
            _id: 138,
            maqsad_id: 28,
            title: 'الفضائل والمناقب',
          },
        ],
      },
      {
        _id: 29,
        icon: 'https://api.sunnahenc.com/images/010.svg',
        short_title: ' الفتن',
        title: 'المقصد العاشر: الفتن',
        ketab: [
          {
            _id: 139,
            maqsad_id: 29,
            title: 'الفتن',
          },
        ],
      },
    ];

    await this.maqsadModel.deleteMany(); // Clear existing data
    await this.maqsadModel.insertMany(maqsadsData); // Insert new data
    console.log('Seed data inserted successfully');
  }

  async findMaqsads() {
    return await this.maqsadModel.find({}).setOptions({ sort: '_id' });
  }

  async findFasls() {
    return await this.maqsadModel.find({});
  }

  async findCategories(findCategoriesDto: FindCategoriesDto) {
    const categories = await this.hadithModel
      .find(FindCategoriesDto.getQuery(findCategoriesDto))
      .setOptions({
        lean: true,
        projection: { category_name: 1, category_id: 1, hadith_no: 1 },
      });

    return categories.filter(
      (cat, i) =>
        categories.findIndex(
          (category) => category.category_id == cat.category_id,
        ) == i,
    );
  }

  async findHadiths(
    findHadithsDto: FindHadithsDto,
    options: QueryOptions<any> = {},
  ) {
    const hadiths = await this.hadithModel
      .find(FindHadithsDto.getQuery(findHadithsDto))
      .setOptions(options);
    return hadiths;
  }

  async getLastVisitedHadith() {
    return this.lastVisitedHadith.findOne();
  }

  async addHadithToFav(findHadithsDto: FindHadithsDto) {
    const hadiths = await this.hadithModel.find(
      FindHadithsDto.getQuery(findHadithsDto),
    );

    await Promise.all(
      hadiths.map((hadith) => {
        hadith.addedToFav = !hadith.addedToFav;
        hadith.save();
      }),
    );

    const hadith = await this.FavHadith.findOne({
      hadith_id: hadiths[0]._id,
    });

    if (!hadith) {
      const fav = new this.FavHadith({ hadith_id: hadiths[0]._id });
      await fav.save();
    } else {
      await hadith.deleteOne();
    }
  }

  async getFav(setPageLimit: SetPageLimit) {
    const favs = await this.FavHadith.find().setOptions({
      limit: setPageLimit.limit,
      skip: setPageLimit.page * setPageLimit.limit,
    });

    const hadiths = await this.findHadiths(
      {
        ids: favs.map((el) => el.hadith_id),
      },
      {
        projection:
          'hadith_no hadith_text maqsad_name ketab_name category_name',
      },
    );
    return hadiths;
  }

  async addNote(findHadithsDto: FindHadithsDto, addNoteDto: AddNoteDto) {
    const note = new this.Note(addNoteDto);
    note.save();
    const hadiths = await this.hadithModel
      .find(FindHadithsDto.getQuery(findHadithsDto))
      .setOptions({ lean: false });

    await Promise.all(
      hadiths.map((hadith) => {
        hadith.noteId = note._id;
        hadith.save();
      }),
    );
  }

  async getNotes(setPageLimit: SetPageLimit) {
    return this.Note.find().setOptions({
      limit: setPageLimit.limit,
      skip: setPageLimit.page * setPageLimit.limit,
    });
  }
}
