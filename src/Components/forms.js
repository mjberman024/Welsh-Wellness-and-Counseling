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

export default [
  {
    title: "Authorization to Release Form",
    pdf: auth_pdf,
    image: auth_thumbnail,
  },
  {
    title: "Consent for Treatment",
    pdf: consent_pdf,
    image: consent_jpg,
  },
  {
    title: "HIPAA Client Rights",
    pdf: hippa_client_pdf,
    image: hippa_client_jpg,
  },
  {
    title: "HIPAA Privacy Practices",
    pdf: hippa_privacy_pdf,
    image: hippa_privacy_jpg,
  },
  {
    title: "Intake Form",
    pdf: intake_pdf,
    image: intake_jpg,
  },
  {
    title: "Sign-off for therapy",
    pdf: signaturesheetsign_offfortherapy_pdf,
    image: signaturesheetsign_offfortherapy_jpg,
  },
];
