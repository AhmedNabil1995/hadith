import { Transform } from 'class-transformer';

export function ToNumber(): PropertyDecorator {
  return Transform(({ value }) => {
    const numberValue = Number(value);
    if (isNaN(numberValue)) {
      throw new Error(`Cannot convert "${value}" to a number`);
    }
    return numberValue;
  });
}
