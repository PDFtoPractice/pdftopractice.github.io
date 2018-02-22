import { QueryType } from '../enums/queryType';
import { MedicalType } from '../enums/medicalType';

export class Results {
  constructor(
    public type : QueryType,
    public type1 : MedicalType,
    public type2 : MedicalType,
    public value1 : string,
    public value2 : string,
    public advice : string,
    public source : string) { }
}
