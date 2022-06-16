import auth_pdf from "../Assets/Forms/AUTHORIZATION TO RELEASE_EXCHANGE CONFIDENTIAL INFORMATION.pdf";
import auth_thumbnail from "../Assets/Forms/AUTHORIZATION TO RELEASE_EXCHANGE CONFIDENTIAL INFORMATION.jpg";

import consent_pdf from "../Assets/Forms/consent-for-treatment.pdf";
import consent_jpg from "../Assets/Forms/consent-for-treatment.jpg";

import hippa_client_pdf from "../Assets/Forms/hipaaclientrights.pdf";
import hippa_client_jpg from "../Assets/Forms/hipaaclientrights.jpg";

import hippa_privacy_pdf from "../Assets/Forms/hipaaprivacypractices.pdf";
import hippa_privacy_jpg from "../Assets/Forms/hipaaprivacypractices.jpg";

import intake_pdf from "../Assets/Forms/intakeform.pdf";
import intake_jpg from "../Assets/Forms/intakeform.jpg";

import signaturesheetsign_offfortherapy_pdf from "../Assets/Forms/signaturesheetsign-offfortherapy.pdf";
import signaturesheetsign_offfortherapy_jpg from "../Assets/Forms/signaturesheetsign-offfortherapy.jpg";

const auth_form = {
  title: "Authorization to Release Form",
  pdf: auth_pdf,
  image: auth_thumbnail,
};

const consent_form = {
  title: "Consent for Treatment",
  pdf: consent_pdf,
  image: consent_jpg,
};

const hippa_client_form = {
  title: "HIPAA Client Rights",
  pdf: hippa_client_pdf,
  image: hippa_client_jpg,
};

const hippa_privacy_form = {
  title: "HIPAA Privacy Practices",
  pdf: hippa_privacy_pdf,
  image: hippa_privacy_jpg,
};

const intake_form = {
  title: "Intake Form",
  pdf: intake_pdf,
  image: intake_jpg,
};

const signaturesheetsign_form = {
  title: "Sign-off for therapy",
  pdf: signaturesheetsign_offfortherapy_pdf,
  image: signaturesheetsign_offfortherapy_jpg,
};

const forms = [
  auth_form,
  consent_form,
  hippa_client_form,
  hippa_privacy_form,
  intake_form,
  signaturesheetsign_form,
];

export default forms;
