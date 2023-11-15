import { Transform } from 'class-transformer';
import {
    ValidatorConstraint,
    ValidatorConstraintInterface,
    ValidationArguments,
    ValidationOptions,
    registerDecorator,
    isString,
  } from 'class-validator';

@ValidatorConstraint({ name: 'trimNotEmpty', async: false })
export class TrimNotEmptyValidator implements ValidatorConstraintInterface {
  validate(value: any, args: ValidationArguments) {
    if (!isString(value)) return false;
    const trimmedValue = value.trim().replace(/\s+/g, ' ');
    return trimmedValue !== '';
  }

  defaultMessage(args: ValidationArguments) {
    return `${args.property} must be a non-empty string`;
  }
}

export function StringTrimNotEmpty(validationOptions?: ValidationOptions) {
  return function (object: Record<string, any>, propertyName: string) {
    Transform(({ value }) => {
      if (isString(value)) {
        return value.replace(/\s+/g, ' ').trim();
      }
      return value;
    })(object, propertyName);

    registerDecorator({
      name: 'trimNotEmpty',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: TrimNotEmptyValidator,
    });
  };
}