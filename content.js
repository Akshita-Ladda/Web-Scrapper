binaryAge = 0;

    extractFirstName = document.querySelector("#nightReport-main > app-night-report-template-v1 > main > div:nth-child(4) > app-night-report-section:nth-child(2) > div > div > div.section-content.ng-star-inserted > div > app-night-report-tab-line:nth-child(2) > div > div.night-report-tab-line__value-wrapper > div").textContent;
    extractLastName = document.querySelector("#nightReport-main > app-night-report-template-v1 > main > div:nth-child(4) > app-night-report-section:nth-child(2) > div > div > div.section-content.ng-star-inserted > div > app-night-report-tab-line:nth-child(1) > div > div.night-report-tab-line__value-wrapper > div").textContent;
    extractSensor = document.querySelector("#nightReport-main > app-night-report-template-v1 > main > div:nth-child(4) > div.report-section > div.section-content > div.row.row--guttered.row--smaller.content.ng-star-inserted > app-night-report-tab-line:nth-child(1) > div > div.night-report-tab-line__value-wrapper > div").textContent;
    D = document.querySelector("#nightReport-main > app-night-report-template-v1 > main > div:nth-child(4) > app-night-report-section:nth-child(2) > div > div > div.section-content.ng-star-inserted > div > app-night-report-tab-line:nth-child(3) > div > div.night-report-tab-line__value-wrapper > div").textContent;
    E = document.querySelector("#nightReport-main > app-night-report-template-v1 > main > div:nth-child(4) > app-night-report-section:nth-child(2) > div > div > div.section-content.ng-star-inserted > div > app-night-report-tab-line:nth-child(4) > div > div.night-report-tab-line__value-wrapper > div").textContent;
    F = document.querySelector("#nightReport-main > app-night-report-template-v1 > main > div:nth-child(4) > app-night-report-section:nth-child(2) > div > div > div.section-content.ng-star-inserted > div > app-night-report-tab-line:nth-child(5) > div > div.night-report-tab-line__value-wrapper > div").textContent;
    G = document.querySelector("#nightReport-main > app-night-report-template-v1 > main > div:nth-child(4) > app-night-report-section:nth-child(2) > div > div > div.section-content.ng-star-inserted > div > app-night-report-tab-line:nth-child(6) > div > div.night-report-tab-line__value-wrapper > div").textContent;
   
// if the patient is a child - the fields are different.
if (parseFloat(E) < 18) {

  binaryAge = 0;

  H = document.querySelector("#nightReport-main > app-night-report-template-v1 > main > div:nth-child(4) > app-night-report-section:nth-child(2) > div > div > div.section-content.ng-star-inserted > div > app-night-report-tab-line:nth-child(7) > div > div.night-report-tab-line__value-wrapper > div").textContent;
  I = document.querySelector("#nightReport-main > app-night-report-template-v1 > main > div:nth-child(4) > app-night-report-section:nth-child(2) > div > div > div.section-content.ng-star-inserted > div > app-night-report-tab-line:nth-child(8) > div > div.night-report-tab-line__value-wrapper > div").textContent;
  J = document.querySelector("#nightReport-main > app-night-report-template-v1 > main > div:nth-child(4) > app-night-report-section:nth-child(2) > div > div > div.section-content.ng-star-inserted > div > app-night-report-tab-line:nth-child(9) > div > div.night-report-tab-line__value-wrapper > div").textContent;
  K = document.querySelector("#nightReport-main > app-night-report-template-v1 > main > div:nth-child(4) > app-night-report-section:nth-child(4) > div > div > div.section-content.ng-star-inserted > div > app-night-report-tab-line:nth-child(1) > div > div.night-report-tab-line__value-wrapper > div").textContent;
  L = document.querySelector("#nightReport-main > app-night-report-template-v1 > main > div:nth-child(4) > app-night-report-section:nth-child(4) > div > div > div.section-content.ng-star-inserted > div > app-night-report-tab-line:nth-child(2) > div > div.night-report-tab-line__value-wrapper > div").textContent;
  M = document.querySelector("#nightReport-main > app-night-report-template-v1 > main > div:nth-child(4) > app-night-report-section:nth-child(4) > div > div > div.section-content.ng-star-inserted > div > app-night-report-tab-line:nth-child(3) > div > div.night-report-tab-line__value-wrapper > div").textContent;
  N = document.querySelector("#nightReport-main > app-night-report-template-v1 > main > div:nth-child(4) > app-night-report-section:nth-child(4) > div > div > div.section-content.ng-star-inserted > div > app-night-report-tab-line:nth-child(4) > div > div.night-report-tab-line__value-wrapper > div").textContent;
  O = document.querySelector("#nightReport-main > app-night-report-template-v1 > main > div:nth-child(4) > app-night-report-section:nth-child(4) > div > div > div.section-content.ng-star-inserted > div > app-night-report-tab-line:nth-child(5) > div > div.night-report-tab-line__value-wrapper > div").textContent;
  P = document.querySelector("#nightReport-main > app-night-report-template-v1 > main > div:nth-child(4) > app-night-report-section:nth-child(4) > div > div > div.section-content.ng-star-inserted > div > app-night-report-tab-line:nth-child(6) > div > div.night-report-tab-line__value-wrapper > div").textContent;
  Q = document.querySelector("#nightReport-main > app-night-report-template-v1 > main > div:nth-child(4) > app-night-report-section:nth-child(5) > div > div > div.section-content.ng-star-inserted > div > app-night-report-tab-line:nth-child(1) > div > div.night-report-tab-line__value-wrapper > div").textContent;
  R = document.querySelector("#nightReport-main > app-night-report-template-v1 > main > div:nth-child(4) > app-night-report-section:nth-child(5) > div > div > div.section-content.ng-star-inserted > div > app-night-report-tab-line:nth-child(2) > div > div.night-report-tab-line__value-wrapper > div").textContent;
  S = document.querySelector("#nightReport-main > app-night-report-template-v1 > main > div:nth-child(4) > app-night-report-section:nth-child(5) > div > div > div.section-content.ng-star-inserted > div > app-night-report-tab-line:nth-child(3) > div > div.night-report-tab-line__value-wrapper > div").textContent;
  T = document.querySelector("#nightReport-main > app-night-report-template-v1 > main > div:nth-child(4) > app-night-report-section:nth-child(5) > div > div > div.section-content.ng-star-inserted > div > app-night-report-tab-line:nth-child(4) > div > div.night-report-tab-line__value-wrapper > div").textContent;
  U = document.querySelector("#nightReport-main > app-night-report-template-v1 > main > div:nth-child(4) > app-night-report-section:nth-child(5) > div > div > div.section-content.ng-star-inserted > div > app-night-report-tab-line:nth-child(5) > div > div.night-report-tab-line__value-wrapper > div").textContent;
  V = document.querySelector("#nightReport-main > app-night-report-template-v1 > main > div:nth-child(4) > app-night-report-section:nth-child(5) > div > div > div.section-content.ng-star-inserted > div > app-night-report-tab-line:nth-child(6) > div > div.night-report-tab-line__value-wrapper > div").textContent;
  W = document.querySelector("#nightReport-main > app-night-report-template-v1 > main > div:nth-child(4) > app-night-report-section:nth-child(5) > div > div > div.section-content.ng-star-inserted > div > app-night-report-tab-line:nth-child(7) > div > div.night-report-tab-line__value-wrapper > div").textContent;
  X = document.querySelector("#nightReport-main > app-night-report-template-v1 > main > div:nth-child(4) > app-night-report-section:nth-child(5) > div > div > div.section-content.ng-star-inserted > div > app-night-report-tab-line:nth-child(8) > div > div.night-report-tab-line__value-wrapper > div").textContent;
  Y = document.querySelector("#nightReport-main > app-night-report-template-v1 > main > div:nth-child(4) > app-night-report-section:nth-child(5) > div > div > div.section-content.ng-star-inserted > div > app-night-report-tab-line:nth-child(9) > div > div.night-report-tab-line__value-wrapper > div").textContent;
  Z = document.querySelector("#nightReport-main > app-night-report-template-v1 > main > div:nth-child(4) > app-night-report-section:nth-child(5) > div > div > div.section-content.ng-star-inserted > div > app-night-report-tab-line:nth-child(10) > div > div.night-report-tab-line__value-wrapper > div").textContent;
  AA = document.querySelector("#nightReport-main > app-night-report-template-v1 > main > div:nth-child(4) > app-night-report-section:nth-child(5) > div > div > div.section-content.ng-star-inserted > div > app-night-report-tab-line:nth-child(11) > div > div.night-report-tab-line__value-wrapper > div").textContent;
  AB = document.querySelector("#nightReport-main > app-night-report-template-v1 > main > div:nth-child(4) > app-night-report-section:nth-child(5) > div > div > div.section-content.ng-star-inserted > div > app-night-report-tab-line:nth-child(1) > div > div.night-report-tab-line__value-wrapper > div").textContent;
  AC = document.querySelector("#nightReport-main > app-night-report-template-v1 > main > div:nth-child(4) > app-night-report-section:nth-child(5) > div > div > div.section-content.ng-star-inserted > div > app-night-report-tab-line:nth-child(2) > div > div.night-report-tab-line__value-wrapper > div").textContent;
  AD = document.querySelector("#nightReport-main > app-night-report-template-v1 > main > div:nth-child(4) > app-night-report-section:nth-child(5) > div > div > div.section-content.ng-star-inserted > div > app-night-report-tab-line:nth-child(3) > div > div.night-report-tab-line__value-wrapper > div").textContent;
  AE = document.querySelector("#nightReport-main > app-night-report-template-v1 > main > div:nth-child(4) > app-night-report-section:nth-child(5) > div > div > div.section-content.ng-star-inserted > div > app-night-report-tab-line:nth-child(4) > div > div.night-report-tab-line__value-wrapper > div").textContent;
  AF = document.querySelector("#nightReport-main > app-night-report-template-v1 > main > div:nth-child(4) > app-night-report-section:nth-child(5) > div > div > div.section-content.ng-star-inserted > div > app-night-report-tab-line:nth-child(5) > div > div.night-report-tab-line__value-wrapper > div").textContent;
  AG = document.querySelector("#nightReport-main > app-night-report-template-v1 > main > div:nth-child(4) > app-night-report-section:nth-child(5) > div > div > div.section-content.ng-star-inserted > div > app-night-report-tab-line:nth-child(6) > div > div.night-report-tab-line__value-wrapper > div").textContent;
  AH = document.querySelector("#nightReport-main > app-night-report-template-v1 > main > div:nth-child(4) > app-night-report-section:nth-child(5) > div > div > div.section-content.ng-star-inserted > div > app-night-report-tab-line:nth-child(7) > div > div.night-report-tab-line__value-wrapper > div").textContent;
  AI = document.querySelector("#nightReport-main > app-night-report-template-v1 > main > div:nth-child(4) > app-night-report-section:nth-child(5) > div > div > div.section-content.ng-star-inserted > div > app-night-report-tab-line:nth-child(8) > div > div.night-report-tab-line__value-wrapper > div").textContent;
  AJ = document.querySelector("#nightReport-main > app-night-report-template-v1 > main > div:nth-child(4) > app-night-report-section:nth-child(5) > div > div > div.section-content.ng-star-inserted > div > app-night-report-tab-line:nth-child(9) > div > div.night-report-tab-line__value-wrapper > div").textContent;
  AK = document.querySelector("#nightReport-main > app-night-report-template-v1 > main > div:nth-child(4) > app-night-report-section:nth-child(7) > div > div > div.section-content.ng-star-inserted > div > app-night-report-tab-line:nth-child(1) > div > div.night-report-tab-line__value-wrapper > div").textContent;
  AL = document.querySelector("#nightReport-main > app-night-report-template-v1 > main > div:nth-child(4) > app-night-report-section:nth-child(7) > div > div > div.section-content.ng-star-inserted > div > app-night-report-tab-line:nth-child(2) > div > div.night-report-tab-line__value-wrapper > div").textContent;
  AM = document.querySelector("#nightReport-main > app-night-report-template-v1 > main > div:nth-child(4) > app-night-report-section:nth-child(7) > div > div > div.section-content.ng-star-inserted > div > app-night-report-tab-line:nth-child(3) > div > div.night-report-tab-line__value-wrapper > div").textContent;
  
  extracted = {Sensor_SN: extractSensor,
    first_name: extractFirstName,	
    last_name: extractLastName,	
    date_of_birth: convertDateFormat(D).replace(/\s+/g, ''),
    age:	E,
    height_cm:	F,
    weight_kg:	G,
    neck_circumference_cm: H, 
    email: I,	
    phone_number: cleanBigNumericString(J),	
    date_of_the_test: convertDateFormat(K).replace(/\s+/g, ''),
    recording_start_time: convertTimeFormat(L),	
    recording_end_time:	removeSpacesFromTime(convertTimeFormat(M)),
    total_recording_time:	convertTimeFormat(N),
    rejected_recording_disconnections: O,	
    analysis_duration_hh_mm: convertTimeFormat(P),	
    TST_hh_mm: convertTimeFormat(Q),
    SOL_min: R,
    fell_asleep_at_hh_mm: convertTimeFormat(S),
    woke_up_at_hh_mm: removeSpacesFromTime(T),	
    WASO_min: U,
    SE_: V,	
    awakening_index_events_hour: W,
    REM_sleep__of_TST: X,	
    light_sleep__of_TST: Y,	
    deep_sleep__of_TST: Z,	
    REM_sleep_latency_min: parseInt(AA),	
    ArI_events_hour: parseInt(AB),	
    ORDI_events_hour: parseInt(AC),	
    estimated_AHI_events_hour: AD,	
    RE_of_TST: AE,	
    RERA_index_events_hour: AF,
    ORDI_in_supine_events_hour: AG,	
    ORDI_in_non_supine_events_hour: AH,	
    ORDI_in_REM_events_hour: AI,	
    ORDI_in_NREM_events_hour: AJ,	
    position_changes_index_events_hour: AK,	
    sleep_time_in_supine_position_ofTST: AL,	
    sleep_time_in_non_supine_position_ofTST: AM};

}

 else{

   binaryAge = 1;
   
    H = document.querySelector("#nightReport-main > app-night-report-template-v1 > main > div:nth-child(4) > app-night-report-section:nth-child(2) > div > div > div.section-content.ng-star-inserted > div > app-night-report-tab-line:nth-child(7) > div > div.night-report-tab-line__value-wrapper > div").textContent;
    I = document.querySelector("#nightReport-main > app-night-report-template-v1 > main > div:nth-child(4) > app-night-report-section:nth-child(2) > div > div > div.section-content.ng-star-inserted > div > app-night-report-tab-line:nth-child(8) > div > div.night-report-tab-line__value-wrapper > div").textContent;
    J = document.querySelector("#nightReport-main > app-night-report-template-v1 > main > div:nth-child(4) > app-night-report-section:nth-child(2) > div > div > div.section-content.ng-star-inserted > div > app-night-report-tab-line:nth-child(9) > div > div.night-report-tab-line__value-wrapper > div").textContent;
    K = document.querySelector("#nightReport-main > app-night-report-template-v1 > main > div:nth-child(4) > app-night-report-section:nth-child(2) > div > div > div.section-content.ng-star-inserted > div > app-night-report-tab-line:nth-child(10) > div > div.night-report-tab-line__value-wrapper > div").textContent;
    L = document.querySelector("#nightReport-main > app-night-report-template-v1 > main > div:nth-child(4) > app-night-report-section:nth-child(2) > div > div > div.section-content.ng-star-inserted > div > app-night-report-tab-line:nth-child(11) > div > div.night-report-tab-line__value-wrapper > div").textContent;
    M = document.querySelector("#nightReport-main > app-night-report-template-v1 > main > div:nth-child(4) > app-night-report-section:nth-child(2) > div > div > div.section-content.ng-star-inserted > div > app-night-report-tab-line:nth-child(12) > div > div.night-report-tab-line__value-wrapper > div").textContent;
    N = document.querySelector("#nightReport-main > app-night-report-template-v1 > main > div:nth-child(4) > app-night-report-section:nth-child(6) > div > div > div.section-content.ng-star-inserted > div > app-night-report-tab-line:nth-child(1) > div > div.night-report-tab-line__value-wrapper > div").textContent;
    O = document.querySelector("#nightReport-main > app-night-report-template-v1 > main > div:nth-child(4) > app-night-report-section:nth-child(6) > div > div > div.section-content.ng-star-inserted > div > app-night-report-tab-line:nth-child(2) > div > div.night-report-tab-line__value-wrapper > div").textContent;
    P = document.querySelector("#nightReport-main > app-night-report-template-v1 > main > div:nth-child(4) > app-night-report-section:nth-child(6) > div > div > div.section-content.ng-star-inserted > div > app-night-report-tab-line:nth-child(3) > div > div.night-report-tab-line__value-wrapper > div").textContent;
    Q = document.querySelector("#nightReport-main > app-night-report-template-v1 > main > div:nth-child(4) > app-night-report-section:nth-child(6) > div > div > div.section-content.ng-star-inserted > div > app-night-report-tab-line:nth-child(4) > div > div.night-report-tab-line__value-wrapper > div").textContent;
    R = document.querySelector("#nightReport-main > app-night-report-template-v1 > main > div:nth-child(4) > app-night-report-section:nth-child(6) > div > div > div.section-content.ng-star-inserted > div > app-night-report-tab-line:nth-child(5) > div > div.night-report-tab-line__value-wrapper > div").textContent;
    S = document.querySelector("#nightReport-main > app-night-report-template-v1 > main > div:nth-child(4) > app-night-report-section:nth-child(6) > div > div > div.section-content.ng-star-inserted > div > app-night-report-tab-line:nth-child(6) > div > div.night-report-tab-line__value-wrapper > div").textContent;
    T = document.querySelector("#nightReport-main > app-night-report-template-v1 > main > div:nth-child(4) > app-night-report-section:nth-child(7) > div > div > div.section-content.ng-star-inserted > div > app-night-report-tab-line:nth-child(1) > div > div.night-report-tab-line__value-wrapper > div").textContent;
    U = document.querySelector("#nightReport-main > app-night-report-template-v1 > main > div:nth-child(4) > app-night-report-section:nth-child(7) > div > div > div.section-content.ng-star-inserted > div > app-night-report-tab-line:nth-child(2) > div > div.night-report-tab-line__value-wrapper > div").textContent;
    V = document.querySelector("#nightReport-main > app-night-report-template-v1 > main > div:nth-child(4) > app-night-report-section:nth-child(7) > div > div > div.section-content.ng-star-inserted > div > app-night-report-tab-line:nth-child(3) > div > div.night-report-tab-line__value-wrapper > div").textContent;
    W = document.querySelector("#nightReport-main > app-night-report-template-v1 > main > div:nth-child(4) > app-night-report-section:nth-child(7) > div > div > div.section-content.ng-star-inserted > div > app-night-report-tab-line:nth-child(4) > div > div.night-report-tab-line__value-wrapper > div").textContent;
    X = document.querySelector("#nightReport-main > app-night-report-template-v1 > main > div:nth-child(4) > app-night-report-section:nth-child(7) > div > div > div.section-content.ng-star-inserted > div > app-night-report-tab-line:nth-child(5) > div > div.night-report-tab-line__value-wrapper > div").textContent;
    Y = document.querySelector("#nightReport-main > app-night-report-template-v1 > main > div:nth-child(4) > app-night-report-section:nth-child(7) > div > div > div.section-content.ng-star-inserted > div > app-night-report-tab-line:nth-child(6) > div > div.night-report-tab-line__value-wrapper > div").textContent;
    Z = document.querySelector("#nightReport-main > app-night-report-template-v1 > main > div:nth-child(4) > app-night-report-section:nth-child(7) > div > div > div.section-content.ng-star-inserted > div > app-night-report-tab-line:nth-child(7) > div > div.night-report-tab-line__value-wrapper > div").textContent;
    AA = document.querySelector("#nightReport-main > app-night-report-template-v1 > main > div:nth-child(4) > app-night-report-section:nth-child(7) > div > div > div.section-content.ng-star-inserted > div > app-night-report-tab-line:nth-child(8) > div > div.night-report-tab-line__value-wrapper > div").textContent;
    AB = document.querySelector("#nightReport-main > app-night-report-template-v1 > main > div:nth-child(4) > app-night-report-section:nth-child(7) > div > div > div.section-content.ng-star-inserted > div > app-night-report-tab-line:nth-child(9) > div > div.night-report-tab-line__value-wrapper > div").textContent;
    AC = document.querySelector("#nightReport-main > app-night-report-template-v1 > main > div:nth-child(4) > app-night-report-section:nth-child(7) > div > div > div.section-content.ng-star-inserted > div > app-night-report-tab-line:nth-child(10) > div > div.night-report-tab-line__value-wrapper > div").textContent;
    AD = document.querySelector("#nightReport-main > app-night-report-template-v1 > main > div:nth-child(4) > app-night-report-section:nth-child(7) > div > div > div.section-content.ng-star-inserted > div > app-night-report-tab-line:nth-child(11) > div > div.night-report-tab-line__value-wrapper > div").textContent;
    AE = document.querySelector("#nightReport-main > app-night-report-template-v1 > main > div:nth-child(4) > app-night-report-section:nth-child(8) > div > div > div.section-content.ng-star-inserted > div > app-night-report-tab-line:nth-child(1) > div > div.night-report-tab-line__value-wrapper > div").textContent;
    AF = document.querySelector("#nightReport-main > app-night-report-template-v1 > main > div:nth-child(4) > app-night-report-section:nth-child(8) > div > div > div.section-content.ng-star-inserted > div > app-night-report-tab-line:nth-child(2) > div > div.night-report-tab-line__value-wrapper > div").textContent;
    AG = document.querySelector("#nightReport-main > app-night-report-template-v1 > main > div:nth-child(4) > app-night-report-section:nth-child(8) > div > div > div.section-content.ng-star-inserted > div > app-night-report-tab-line:nth-child(3) > div > div.night-report-tab-line__value-wrapper > div").textContent;
    AH = document.querySelector("#nightReport-main > app-night-report-template-v1 > main > div:nth-child(4) > app-night-report-section:nth-child(8) > div > div > div.section-content.ng-star-inserted > div > app-night-report-tab-line:nth-child(4) > div > div.night-report-tab-line__value-wrapper > div").textContent;
    AI = document.querySelector("#nightReport-main > app-night-report-template-v1 > main > div:nth-child(4) > app-night-report-section:nth-child(8) > div > div > div.section-content.ng-star-inserted > div > app-night-report-tab-line:nth-child(5) > div > div.night-report-tab-line__value-wrapper > div").textContent;
    AJ = document.querySelector("#nightReport-main > app-night-report-template-v1 > main > div:nth-child(4) > app-night-report-section:nth-child(8) > div > div > div.section-content.ng-star-inserted > div > app-night-report-tab-line:nth-child(6) > div > div.night-report-tab-line__value-wrapper > div").textContent;
    AK = document.querySelector("#nightReport-main > app-night-report-template-v1 > main > div:nth-child(4) > app-night-report-section:nth-child(8) > div > div > div.section-content.ng-star-inserted > div > app-night-report-tab-line:nth-child(7) > div > div.night-report-tab-line__value-wrapper > div").textContent;
    AL = document.querySelector("#nightReport-main > app-night-report-template-v1 > main > div:nth-child(4) > app-night-report-section:nth-child(8) > div > div > div.section-content.ng-star-inserted > div > app-night-report-tab-line:nth-child(8) > div > div.night-report-tab-line__value-wrapper > div").textContent;
    AM = document.querySelector("#nightReport-main > app-night-report-template-v1 > main > div:nth-child(4) > app-night-report-section:nth-child(8) > div > div > div.section-content.ng-star-inserted > div > app-night-report-tab-line:nth-child(9) > div > div.night-report-tab-line__value-wrapper > div").textContent;
    AN = document.querySelector("#nightReport-main > app-night-report-template-v1 > main > div:nth-child(4) > app-night-report-section:nth-child(8) > div > div > div.section-content.ng-star-inserted > div > app-night-report-tab-line:nth-child(10) > div > div.night-report-tab-line__value-wrapper > div").textContent;
    AO = document.querySelector("#nightReport-main > app-night-report-template-v1 > main > div:nth-child(4) > app-night-report-section:nth-child(9) > div > div > div.section-content.ng-star-inserted > div > app-night-report-tab-line:nth-child(1) > div > div.night-report-tab-line__value-wrapper > div").textContent;
    AP = document.querySelector("#nightReport-main > app-night-report-template-v1 > main > div:nth-child(4) > app-night-report-section:nth-child(9) > div > div > div.section-content.ng-star-inserted > div > app-night-report-tab-line:nth-child(2) > div > div.night-report-tab-line__value-wrapper > div").textContent;
    AQ = document.querySelector("#nightReport-main > app-night-report-template-v1 > main > div:nth-child(4) > app-night-report-section:nth-child(9) > div > div > div.section-content.ng-star-inserted > div > app-night-report-tab-line:nth-child(3) > div > div.night-report-tab-line__value-wrapper > div").textContent;
    AR = document.querySelector("#nightReport-main > app-night-report-template-v1 > main > div:nth-child(4) > div.report-section > div.section-content > app-night-report-chart:nth-child(4)").outerHTML;
    AS = document.querySelector("#nightReport-main > app-night-report-template-v1 > main > div:nth-child(4) > div.report-section > div.section-content > app-night-report-chart:nth-child(5)").outerHTML;  
    AT = document.querySelector("#nightReport-main > app-night-report-template-v1 > main > div:nth-child(4) > div.report-section > div.section-content > app-night-report-chart:nth-child(6)").outerHTML;
    AU = document.querySelector("#nightReport-main > app-night-report-template-v1 > main > div:nth-child(4) > div.report-section > div.section-content > app-night-report-chart:nth-child(7)").outerHTML;
    AV = document.querySelector("#nightReport-main > app-night-report-template-v1 > main > div:nth-child(4) > div.report-section > div.section-content > div.row.row--guttered.row--smaller.content.ng-star-inserted > app-night-report-tab-line:nth-child(5) > div > div.night-report-tab-line__value-wrapper").outerHTML;
    AW = document.querySelector("#nightReport-main > app-night-report-template-v1 > main > div:nth-child(4) > div.report-section > div.section-content > div.row.row--guttered.row--smaller.content.ng-star-inserted > app-night-report-tab-line:nth-child(6) > div > div.night-report-tab-line__value-wrapper").outerHTML;
    AX = document.querySelector("#nightReport-main > app-night-report-template-v1 > main > div:nth-child(4) > div.report-section > div.section-content > div.row.row--guttered.row--smaller.content.ng-star-inserted > app-night-report-tab-line:nth-child(7) > div > div.night-report-tab-line__value-wrapper").outerHTML;
    AY = document.querySelector("#nightReport-main > app-night-report-template-v1 > main > div:nth-child(4) > div.components-versions").textContent.split('-');
    AZ = document.querySelector("#nightReport-main > app-night-report-template-v1 > main > div:nth-child(4) > div.report-section > div.section-content > div:nth-child(3) > div:nth-child(7) > p.question-answer.reliability-index-text.reliability-index-text--success").textContent;
    AAA = document.querySelector("#nightReport-main > app-night-report-template-v1 > main > div:nth-child(4) > div.report-section > div.section-content > div:nth-child(1) > div:nth-child(2) > p").textContent;
    extracted = {Sensor_SN: extractSensor,
              first_name: extractFirstName,	
              last_name: extractLastName,	
              date_of_birth: convertDateFormat(D),
              age:	E,
              height_cm:	F,
              weight_kg:	G,
              BMI_kgm: H,
              neck_circumference_cm: parseInt(I), 
              email: J,	
              phone_number: cleanBigNumericString(K),	
              smoking: L,	
              high_blood_pressure: M,	
              date_of_the_test: convertDateFormat(N).replace(/\s+/g, ''),
              recording_start_time: convertTimeFormat(O),	
              recording_end_time:	removeSpacesFromTime(convertTimeFormat(P)),
              total_recording_time:	convertTimeFormat(Q),
              rejected_recording_disconnections: R,	
              analysis_duration_hh_mm: convertTimeFormat(S),	
              TST_hh_mm: convertTimeFormat(T),
              SOL_min: U,
              fell_asleep_at_hh_mm: convertTimeFormat(V),
              woke_up_at_hh_mm: removeSpacesFromTime(convertTimeFormat(W)),	
              WASO_min: X,
              SE_: Y,	
              awakening_index_events_hour: Z,
              REM_sleep__of_TST: AA,	
              light_sleep__of_TST: AB,	
              //deep_sleep__of_TST: AC	
              REM_sleep_latency_min: parseInt(AD),	
              ArI_events_hour: parseInt(AE),	
              ORDI_events_hour: parseInt(AF),	
              estimated_AHI_events_hour: AG,	
              RE_of_TST: AH,	
              RERA_index_events_hour: AI,
              ORDI_in_supine_events_hour: AJ,	
              ORDI_in_non_supine_events_hour: AK,	
              ORDI_in_REM_events_hour: AL,	
              ORDI_in_NREM_events_hour: AM,	
              rmma_index: parseInt(AN),
              position_changes_index_events_hour: AO,	
              sleep_time_in_supine_position_ofTST: AP,	
              sleep_time_in_non_supine_position_ofTST: AQ,
              wakefullness_chart: AR,
              arousals_chart: AS,
              respiratory_events_chart: AT,
              supine_chart: AU,
              style: AU,
              ordi_chart: AV,
              ahi_chart: AW,
              re_chart: AX,
              Sensore_version: AY[0],
              test: AZ,
              complaints: AAA,
              deep_sleep__of_TST: AC};
  }
  

console.log(extracted);

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {

  if (request.action === 'contentScriptReady') {

    console.log('Content script is ready to receive messages');

  }

  else if (request.action === 'scrapeData') { 
    console.log("extracted"); 
    //console.log(' Data:', extractedData);  
    sendResponse({ message: 'dataScraped', extractedText: extracted, age: binaryAge}); 
    extracted = ""; // Reset extracted to an empty string after sending data
    binaryAge = 0;

  }
});



// functions for cleaning the data so that BigQuery will accpet it
  
function convertDateFormat(inputDate) {

  const parts = inputDate.split('/');
  const yyyy = parts[2];
  const mm = parts[1];
  const dd = parts[0];    
  const newDateFormat = `${yyyy}-${mm}-${dd}`;

  return newDateFormat;

}

function convertTimeFormat(inputTime) {

  if (inputTime.trim() === '-') {
    return '00:00:00';
  }

  const newTimeFormat = `${inputTime}:00`;    
  const formattedTime = newTimeFormat.replace(/\s+/g, '');  

  return formattedTime;

}

// for phone_number
function cleanBigNumericString(inputString) {

  if (!inputString || inputString.trim() === '') {
    return '0';
  }

  // Removing anything that's not a number
  const cleanedString = inputString.replace(/[^0-9]/g, '');

  if (cleanedString === '') {
    return '0';
  }

  return cleanedString;
  
}

function removeSpacesFromTime(inputTime) {

  if (inputTime.trim() === '-') {
    return '00:00:00';
  }

  // Removing spaces from the input time string
  const newTime = inputTime.replace(/\s/g, "");

  return newTime;
}