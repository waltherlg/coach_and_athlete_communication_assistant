
import { StringTrimNotEmpty} from "src/middlewares/validators";
import { Length, Validate, MaxLength, IsDateString } from 'class-validator';


export class CreateAthleteInputModel {
    @StringTrimNotEmpty()
    @MaxLength(50)
    name: string;
    @StringTrimNotEmpty()
    @MaxLength(50)
    surname: string;
    @StringTrimNotEmpty()
    @MaxLength(50)
    dateOfBirth: string;
  }