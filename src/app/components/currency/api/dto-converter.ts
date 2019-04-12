import {CurrencyModel} from "../model/currency.model";

const CURRENCY_CODES = ["USD", "EUR", "RUB"];

export function currencyDtoToModel(dto: any): Array<CurrencyModel> {

  const required = dto.filter((currency) => CURRENCY_CODES.indexOf(currency.Cur_Abbreviation) > -1);

  const model = required.map((currency) => {
    return <CurrencyModel>{
      code: currency["Cur_Abbreviation"],
      rate: currency["Cur_OfficialRate"]
    };
  });

  return model;
}
