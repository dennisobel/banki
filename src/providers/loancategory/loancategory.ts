import { Injectable } from '@angular/core';
import { resolve } from 'path';

@Injectable()
export class LoancategoryProvider {
  private categories:any
  
  constructor() {
    console.log('Hello LoancategoryProvider Provider');
  }

  getCategories() {
    return new Promise((resolve,reject) => {
      resolve(
        this.categories = [
          {
            id:1000,
            description:"Current Accounts",
            shortname:"Curr Acct",
            product:"AC"
          },
          {
            id:1001,
            description:"Dev Loan Servicing A/c",
            shortname:"DevelopLoan",
            product:"AC"
          },
          {
            id:1002,
            description:"Loan Disbursement A/c",
            shortname:"Loan Disb Ac"
            ,product:"AC"
          },
          {
            id:1003,
            description:"Education Loan Servicing A/c",
            shortname:"EducLoan",
            product:"AC"
          },
          {
            id:1004,
            description:"Express Loan Servicing A/c",
            shortname:"ExpresLoan",
            product:"AC"
          },
          {
            id:1005,
            description:"Top-up Loan Servicing A/c",
            shortname:"TopUpLoan",
            product:"AC"
          },
          {
            id:1006,
            description:"Micro Loan Servicing A/c",
            shortname:"MicroLoan",
            product:"AC"
          },
          {
            id:1007,
            description:"Mortgage Loan Servicing A/c",
            shortname:"MrtgLoan",
            product:"AC"
          },
          {
            id:1008,
            description:"Asset Finance Loan Servicing A/c",
            shortname:"AsstFinLoan",
            product:"AC"
          },
          {
            id:1009,
            description:"Staff Loans Servicing A/c",
            shortname:"StaffLoan",
            product:"AC"
          },
          {
            id:1010,
            description:"Karibu Loan Servicing A/c",
            shortname:"KaribuLoan",
            product:"AC"
          },
          {
            id:1011,
            description:"Domestic Loan Servicing A/c",
            shortname:"DomeLoan",
            product:"AC"
          },
          {
            id:1012,
            description:"Asset Finance Loan Servicing A/c",
            shortname:"AssetFinance",
            product:"AC"
          },
          {
            id:1013,
            description:"Boresha Loan Servicing A/c",
            shortname:"BoreshaLoan",
            product:"AC"
          },
          {
            id:1014,
            description:"Smart Life Ln Servicing A/c",
            shortname:"SmartLife Loan",
            product:"AC"
          },
          {
            id:1015,
            description:"SuperLoan Servicing A/c",
            shortname:"SuperLoan",
            product:"AC"
          },
          {
            id:1016,
            description:"MLoan",
            shortname:"MLoan",
            product:"AC"
          },
          {
            id:1017,
            description:"Electricity Loans",
            shortname:"Elect Loan",
            product:"AC"
          },
          {
            id:1018,
            description:"MB FOSA ADVANCE",
            shortname:"MB FOSA ADV",
            product:"AC"
          },
          {
            id:1019,
            description:"KOPA CREDIT",
            shortname:"KOPA CREDIT",
            product:"AC"
          },
          {
            id:1039,
            description:"Dividend Account",
            shortname:"DivAcct",
            product:"AC"
          },
          {
            id:1040,
            description:"FRONT OFFICE ACTIVITIES ACCOUNTS",
            shortname:"FOSA",
            product:"AC"
          },
          {
            id:1150,
            description:"AZ Loan Account",
            shortname:"AZ Loan Account",
            product:"AC"
          },
          {
            id:1160,
            description:"AZ Loan Account",
            shortname:"AZ Loan Accts",
            product:"AC"
          },
          {
            id:1170,
            description:"AZ Loan Account",
            shortname:"AZ Loan Account",
            product:"AC"
          },
          {
            id:1190,
            description:"AZ Deposits",
            shortname:"AZ Deposits",
            product:"AC"
          },
          {
            id:1800,
            description:"DORMANT ACCOUNT -ADJUST",
            shortname:"DORMANT AC",
            product:"AC"
          },
          {
            id:1999,
            description:" Current Accounts",
            shortname:"Curr Acct",
            product:"AC"
          },
          {
            id:2000,
            description:" Vostro Accounts",
            shortname:"Vostro Accounts",
            product:"AC"
          },
          {
            id:2001,
            description:"Vostro Account",
            shortname:"Vostro Account",
            product:"AC"
          },
          {
            id:2999,
            description:" Vostro Accounts",
            shortname:"Vostro Accounts",
            product:"AC"
          },
          {
            id:3000,
            description:"AA Loan Category Start",
            shortname:"AA Loan Start",
            product:"AC"
          },
          {
            id:3001,
            description:"Agric Land Purchse",
            shortname:"Agric Land Pur",
            product:"AC"
          },
          {
            id:3002,
            description:"Agric Land Development",
            shortname:"Agric Dev",
            product:"AC"
          },
          {
            id:3003,
            description:"House Loan Staff",
            shortname:"House Loan",
            product:"AC"
          },
          {
            id:3004,
            description:"Car Loan - Staff",
            shortname:"Car Loan Stf",
            product:"AC"
          },
          {
            id:3005,
            description:"Study Loan Staff",
            shortname:"Study Loan",
            product:"AC"
          },
          {
            id:3006,
            description:"Staff Personal Loan",
            shortname:"Staff Pers Loan",
            product:"AC"
          },
          {
            id:3007,
            description:"Development Loan",
            shortname:"Dev. Loan",
            product:"AC"
          },
          {
            id:3008,
            description:"Express Loan",
            shortname:"ExPress Loan",
            product:"AC"
          },
          {
            id:3009,
            description:"Micro Loan",
            shortname:"Micro Loan",
            product:"AC"
          },
          {
            id:3010,
            description:"Smart Device Loan",
            shortname:"Smart Device",
            product:"AC"
          },
          {
            id:3011,
            description:"Education Loan",
            shortname:"Education Loan",
            product:"AC"
          },
          {
            id:3012,
            description:"Super Loan",
            shortname:"Super Loan",
            product:"AC"
          },
          {
            id:3013,
            description:"Asset Financing",
            shortname:"Asset Finance",
            product:"AC"
          },
          {
            id:3014,
            description:"M-Loan",
            shortname:"M-Loan",
            product:"AC"
          },
          {
            id:3015,
            description:"FOSA Advance - Staff",
            shortname:"FOSA Advanc",
            product:"AC"
          },
          {
            id:3016,
            description:"Sacco Mortgage",
            shortname:"Sacco Mortgage",
            product:"AC"
          },
          {
            id:3017,
            description:"Guarantor Guaranteed",
            shortname:"Guarantor Loan",
            product:"AC"
          },
          {
            id:3018,
            description:"FOSA Advance",
            shortname:"FOSA Advanc",
            product:"AC"
          },
          {
            id:3019,
            description:"FOSA Advance - Laptop",
            shortname:"Laptop",
            product:"AC"
          },
          {
            id:3020,
            description:"SaccoMicro-15%",
            shortname:"SaccoMicro-15%",
            product:"AC"
          },
          {
            id:3021,
            description:"Karibu Loan",
            shortname:"Karibu Loan",
            product:"AC"
          },
          {
            id:3022,
            description:"Boresha Loan",
            shortname:"Boresha Loan",
            product:"AC"
          },
          {
            id:3999,
            description:"AA Loan Category End",
            shortname:"AA Loan End",
            product:"AC"
          },
          {
            id:6000,
            description:"Chama Main Savings",
            shortname:"Chama Savings",
            product:"AC"
          },
          {
            id:6001,
            description:"Main Scheme",
            shortname:"MainSav",
            product:"AC"
          },
          {
            id:6002,
            description:"Risk Management Fund",
            shortname:"RiskFund",
            product:"AC"
          },
          {
            id:6003,
            description:"Education Scheme (Savings)",
            shortname:"EducSav",
            product:"AC"
          },
          {
            id:6004,
            description:"Mortgage Finance Scheme",
            shortname:"MortgSav",
            product:"AC"
          },
          {
            id:6005,
            description:"Micro Credit Scheme",
            shortname:"MicroSav",
            product:"AC"
          },
          {
            id:6006,
            description:"FOSA Savings Ac",
            shortname:"Fosa",
            product:"AC"
          },
          {
            id:6007,
            description:"FOSA Chama",
            shortname:"FOSA Chama",
            product:"AC"
          },
          {
            id:6008,
            description:"FOSA Savings Ac- Staff",
            shortname:"Fosa",
            product:"AC"
          },
          {
            id:6009,
            description:"Minor Savings Account",
            shortname:"MinorSav",
            product:"AC"
          },
          {
            id:6010,
            description:"Medical Insurance Premium",
            shortname:"Insurance Prem",
            product:"AC"
          },
          {
            id:6011,
            description:"Share Capital Deposit",
            shortname:"ShareCapt",
            product:"AC"
          },
          {
            id:6012,
            description:"FOSA Savings Investment",
            shortname:"Investment",
            product:"AC"
          },
          {
            id:6049,
            description:"Saving Accounts",
            shortname:"Saving Accounts",
            product:"AC"
          },{
            id:6099,
            description:" Saving Accounts",
            shortname:"Saving Accounts",
            product:"AC"
          },
          {
            id:6100,
            description:"Mortgage Savings Account",
            shortname:"MG savings acct",
            product:"AC"
          },
          {
            id:6150,
            description:"Time Saving Accounts",
            shortname:"Time saving act",
            product:"AC"
          },
          {
            id:6300,
            description:"Retirement Saving Accounts",
            shortname:"Retire sav acct",
            product:"AC"
          },
          {
            id:6500,
            description:"Savings - Passbook",
            shortname:"Savings-P.Book",
            product:"AC"
          },
          {
            id:6999,
            description:"Drawdown Account",
            shortname:"Drawdown Acct.",
            product:"AC"
          },
          {
            id:7000,
            description:" Share Accounts ",
            shortname:"Share Account",
            product:"AC"
          },
          {
            id:7310,
            description:"Initial Share",
            shortname:"Initial Share",
            product:"AC"
          }
        ]
      )
    })
  }

}
