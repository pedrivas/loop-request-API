const axios = require('axios').default;

var subscriberId //17 '00000000000000000'

axios.defaults.headers.common['tenantid'] = 'T1,M SP 01 ';

postBeneficiaries();

async function postBeneficiaries() {
  for (var beneficiaries = 1; beneficiaries <= 1000000; beneficiaries++ ) {
    subscriberId = beneficiaries.toString().padStart(17,'0')
    await axios
    .post('http://localhost:4444/api/healthcare/v1/beneficiaries/', {
      healthInsurerCode:"417505",
      subscriberId:subscriberId,
      CodeCCO:"",
      Name:"EVERTON DE SOUZA LIMA",
      Gender:"3",
      Birthdate:"1988-08-30",
      EffectiveDate:"2020-01-04",
      BlockDate:"2019-12-11",
      healthInsuranceCode:"0001001",
      UnblockDate:"2019-03-22",
      MothersName:"MAR DO RONALDO",
      NationalHealthCard:"148970923430000",
      Address:"Joao Laim, 917",
      stateAbbreviation:"SP",
      HouseNumbering:"917",
      District:"Desvio Rizzo",
      CityCode:"4305108",
      ZipCode:"95110430",
      TypeOfAddress:"2",
      ResidentAbroad:"0",
      HolderRelationship:"01",
      CodeSusep:"123456789",
      CodeSCPA:"",
      PartialCoverage:"0",
      GuarantorCEI:"",
      GuarantorCNPJ:"",
      HolderCPF:"48232410027",
      MotherCPF:"",
      SponsorCPF:"",
      ExcludedItems:"0",
      statusANS:"I",
      skipRuleName:"0",
      notifyANS:true,
      skipRuleMothersName:"0",
      caepf:""
    })
    .then(res => {
      console.log(`statusCode: ${res.statusCode}`)
      console.log(res)
    })
    .catch(error => {
      console.error(error)
    })
  }
}