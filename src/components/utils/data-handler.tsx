export const getCompanyReportArray = (data: any) => {
  let companyReport = [];

  if (!data.company_report) {
    // // console.log('entre -------------------');

    return companyReport;
  }

  // // console.log('pase -------------------');
  companyReport.push(data.company_report.M);
  companyReport.push(data.company_report.E);
  companyReport.push(data.company_report.S);
  companyReport.push(data.company_report.F);
  companyReport = companyReport.map((elem: any) => {
    elem.areas = Object.values(elem.areas);
    return elem;
  });

  return companyReport;
};

export const getPersonalReportArray = (data: any) => {
  let personalReport = [];
  // // console.log('data.personal_report', data.personal_report);
  if (!data.personal_report) {
    return personalReport;
  }
  personalReport.push(data.personal_report.M);
  personalReport.push(data.personal_report.E);
  personalReport.push(data.personal_report.S);
  personalReport.push(data.personal_report.F);
  personalReport = personalReport.map((elem: any) => {
    elem.areas = Object.values(elem.areas);
    return elem;
  });
  return [...personalReport];
};

export const getDiferenceValues = (compayReportArray: Array<any>, personalReportArray: Array<any>) => {
  let valuesAreasPersonalReport: Array<any> = [];
  if (compayReportArray && compayReportArray.length >0) {
     personalReportArray.map(report => {
       const result = report.areas.map((elem: any) => ({ sufix: elem.sufix, value: elem.value }));
       valuesAreasPersonalReport = valuesAreasPersonalReport.concat(result);
     });
     // // // console.log('valuesAreasPersonalReport', valuesAreasPersonalReport);

     compayReportArray = compayReportArray.map(report => {
       report.areas.map((elem: any) => {
         const finded = valuesAreasPersonalReport.find(elemento => elemento.sufix === elem.sufix);
         if (finded) {
           elem.diference = finded.value - elem.value;
         }
       });
     });
     // // // console.log('getDiferenceValues', compayReportArray);

     return [...compayReportArray];
  }

};

export const getScore = (data: any) => {
  return data.score;
};
