var obj={"PREMIUMDETAILS":{"DATA":{"GROSS_PREMIUM":"10017.0","PREMIUM_WITHOUT_COVERS":"10017.0","IDV":"62342.0","QUOTE_ID":"QVMNPB0032847","PACKAGE_PREMIUM":"8489.0","PREMIUM":"10017.0","SERVICETAX":"0","ECESS":{},"KRISHI_CESS":{},"POLICY_START_DATE":"06/10/2018","POLICY_EXPIRY_DATE":"05/10/2023","VERSION_NO":"1.0","OD_PREMIUM":{"BASIC_PREMIUM_AND_NON_ELECTRICAL_ACCESSORIES":"959.0","ELECTRICAL_ACCESSORIES":"0.0","BI_FUEL_KIT":"0.0","FIBER_GLASS_TANK":"0.0","VOLUNTARY_DEDUCTABLE":"0.0","NO_CLAIM_BONUS":"0.0","DEPRECIATION_WAIVER":"0.0","ENGINE_PROTECTOR":"0.0","NCB_PROTECTOR":"0.0","WIND_SHIELD_GLASS":"0.0","LIFE_TIME_ROAD_TAX":"0.0","SPARE_CAR":"0.0","INVOICE_PRICE_INSURANCE":"0.0","LOSS_OF_BAGGAGE":"0.0","TOTAL_OD_PREMIUM":"959.0","KEY_REPLACEMENT":"0.0","NIL_INTERMEDIATION_COVER_PREMIUM":"0.0","BULKDEAL_DISCOUNT_COVER_PREMIUM":"0.0","TOWING_CHARGES_COVER_PREMIUM":"0.0"},"LIABILITY":{"BASIC_PREMIUM_INCLUDING_PREMIUM_FOR_TPPD":"3285.0","BI_FUEL_KIT_CNG":"0.0","PERSONAL_ACCIDENT_BENEFITS":"-","UNDER_SECTION_III_OWNER_DRIVER":"3750.0","UNNAMED_PASSENGRS":"210.0","PA_COVER_TO_PAID_DRIVER":"35.0","TO_PAID_DRIVERS":"250.0","TO_EMPLOYESES":"0.0","TOTAL_LIABILITY_PREMIUM":"7530.0"},"POLICY_TERM":"1","TAX_TYPE":"GST","IGST":"0.0","CGST":"764.0","SGST":"764.0","UTGST":"0.0","LIABILITY_POLICY_TERM":"5"},"Status":{"StatusCode":"S-0002","Message":"Premium Calculated and Quote Saved Successfully"}}}

console.log(obj.PREMIUMDETAILS.DATA.IDV)
console.log(obj.PREMIUMDETAILS.DATA.QUOTE_ID)


var obj1 =[ { Quote_Id: 'QVMNPB0032912' },
  { IDV: '62342.0' },
  { Gross_Premium: '10017.0' } ]

var hex =""

  console.log(JSON.stringify(obj1[0].toString(16)),"pppppp")
  console.log(Buffer.from(JSON.stringify(obj1[0]), 'utf8').toString('hex'))
  for(var i=0;i<obj1.length;i++) {
    hex += ''+Buffer.from(JSON.stringify(obj1[i]), 'utf8').toString('hex');
}
 console.log(hex,"wow")
 console.log(new Date())
 module.exports = router; 