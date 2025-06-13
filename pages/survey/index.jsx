// pages/survey.js

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react'

const Survey = () => {
    const { t } = useTranslation("common");
    
    return (
        <>
        <div class="_breadcrumb">
		   <p class="_breadcrumb-header">Survey Request</p>
		</div>
        <div className='container-survey'>
            <div class="ms-webpart-zone ms-fullWidth">
                <div id="MSOZoneCell_WebPartctl00_ctl41_g_582b3796_6aa3_4d31_b5e3_f69be0e2388e" class="s4-wpcell-plain ms-webpartzone-cell ms-webpart-cell-vertical ms-fullWidth">
                    <div class="ms-webpart-chrome ms-webpart-chrome-vertical ms-webpart-chrome-fullWidth">
                        <div webpartid="582b3796-6aa3-4d31-b5e3-f69be0e2388e" haspers="false" id="WebPartctl00_ctl41_g_582b3796_6aa3_4d31_b5e3_f69be0e2388e" width="100%" class="ms-WPBody noindex" allowdelete="false" allowexport="false" ><div id="ctl00_ctl41_g_582b3796_6aa3_4d31_b5e3_f69be0e2388e">

                            {/* <script type="text/javascript">
                                function ShowEserviceLoginPopup() {
                                    // $('#myModalLogin').modal('show');
                                    $('#user-login').click();
    }
                            </script> */}
                            <input type="hidden" name="ctl00$ctl41$g_582b3796_6aa3_4d31_b5e3_f69be0e2388e$ctl00$hdnPrefix" id="ctl00_ctl41_g_582b3796_6aa3_4d31_b5e3_f69be0e2388e_ctl00_hdnPrefix" value="SurveyRequest_" />

                            <div id="View" style={{marginTop:"40px"}}>
                                <div class="col-xs-12 col-sm-12 col-md-12 ListPage">
                                    <h6>Overview</h6>
                                    <hr />
                                    <p>Under the Statistics and Information Law promulgated by Royal Decree No. 55/2001, and its Executive Regulations issued by Decree No. 9/2023AD; it is stated that non-governmental entities and individuals shall not conduct any survey without obtaining a statistical license; while governmental entities may conduct statistical activities upon obtaining the approval of the Center.


                                        <a href="https://www.ncsi.gov.om/Royal/Pages/LawsandConventionsCT_20200820113333990.aspx "> Web link for Statistics and Information Law </a>

                                        ،
                                        <a href="https://www.ncsi.gov.om/Royal/Pages/LawsandConventionsCT_20230129140471344.aspx"> Executive Regulations</a>
                                    </p>
                                </div>
                                <div class="col-xs-12 col-sm-12 col-md-12 ListPage">
                                    <h6>Who Can Request The Service?</h6>
                                    <hr />
                                    <p>All governmental and non-governmental entities and individuals of students, researchers and academics.</p>
                                </div>
                                <div class="col-xs-12 col-sm-12 col-md-12 ListPage">
                                    <h6>What Are The Steps To Request The Service?</h6>
                                    <hr />
                                    <p>1.	Log in to the Center’s portal (for governmental and non-governmental entities using smart cards, and for individuals using Civil ID Number).
                                        2.	Filling the e-form.
                                        3.	Attach complementary documents – determined by Article No. (5) of the Executive Regulations of Statistics and Information Law.
                                        4.	Pay fees of the statistical activity (for non-governmental entities).
                                        5.	Extract the ID for the person in charge of the statistical activity – Article No. (17) of the Executive Regulations.
                                    </p>
                                </div>
                                <div class="col-xs-12 col-sm-12 col-md-12 ListPage">
                                    <h6>What Documents Are Needed?</h6>
                                    <hr />
                                    <p>-</p>
                                </div>
                                <div class="col-xs-12 col-sm-12 col-md-12 ListPage">
                                    <h6>How Long Does It Take?</h6>
                                    <hr />
                                    <p>A decision on the application for statistical licensing shall be made within (30) thirty days from the date of submitting the request and submitting the required documents.</p>
                                </div>

                                <div class="row">
                                    <div class="col-xs-12 col-sm-12 col-md-12 btnsWrapper">

                                        <a href="/survey-request" id="ctl00_ctl41_g_582b3796_6aa3_4d31_b5e3_f69be0e2388e_ctl00_lnk_EserviceLogin" class="submitBtn" >
                                            Request for Approval for Survey / Poll- Survey</a>


                                    </div>
                                </div>
                            </div>
                            <div id="Edit" class="regFrom" style={{ display: "none" }}>
                                <div class="row">
                                    <div class="col-xs-12 col-sm-12 col-md-6">
                                        <div class="form-group">
                                            <div class="col-sm-4  control-label">
                                                <span title="Overview" class="lbl">Overview</span>
                                                <span class="Astr">*</span>
                                            </div>
                                            <div class="col-sm-8">
                                                <textarea name="ctl00$ctl41$g_582b3796_6aa3_4d31_b5e3_f69be0e2388e$ctl00$txtServiceOverview" rows="2" cols="20" id="ctl00_ctl41_g_582b3796_6aa3_4d31_b5e3_f69be0e2388e_ctl00_txtServiceOverview" title="Overview" class="txtbox" style={{ height: "94px", width: "100%" }}></textarea>

                                                <span id="ctl00_ctl41_g_582b3796_6aa3_4d31_b5e3_f69be0e2388e_ctl00_rfvahSummeryArb" class="RequiredAstr" style={{ visibility: "hidden" }}>* Mandatory Field</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-md-6">
                                        <div class="form-group">
                                            <div class="col-sm-4  control-label">
                                                <span title="Who Can Request The Service?" class="lbl">Who Can Request The Service?</span>
                                                <span class="Astr">*</span>
                                            </div>
                                            <div class="col-sm-8">
                                                <textarea name="ctl00$ctl41$g_582b3796_6aa3_4d31_b5e3_f69be0e2388e$ctl00$txtServiceRequestor" rows="2" cols="20" id="ctl00_ctl41_g_582b3796_6aa3_4d31_b5e3_f69be0e2388e_ctl00_txtServiceRequestor" title="Who Can Request The Service?" class="txtbox" style={{ height: "94px", width: "100%" }}></textarea>

                                                <span id="ctl00_ctl41_g_582b3796_6aa3_4d31_b5e3_f69be0e2388e_ctl00_RequiredFieldValidator1" class="RequiredAstr" style={{ visibility: "hidden" }}>* Mandatory Field</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-xs-12 col-sm-12 col-md-6">
                                        <div class="form-group">
                                            <div class="col-sm-4  control-label">
                                                <span title="What Are The Steps To Request The Service?" class="lbl">What Are The Steps To Request The Service?</span>
                                                <span class="Astr">*</span>
                                            </div>
                                            <div class="col-sm-8">
                                                <textarea name="ctl00$ctl41$g_582b3796_6aa3_4d31_b5e3_f69be0e2388e$ctl00$txtServiceRequestSteps" rows="2" cols="20" id="ctl00_ctl41_g_582b3796_6aa3_4d31_b5e3_f69be0e2388e_ctl00_txtServiceRequestSteps" title="What Are The Steps To Request The Service?" class="txtbox" style={{ height: "94px", width: "100%" }}></textarea>

                                                <span id="ctl00_ctl41_g_582b3796_6aa3_4d31_b5e3_f69be0e2388e_ctl00_RequiredFieldValidator3" class="RequiredAstr" style={{ visibility: "hidden" }}>* Mandatory Field</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-md-6">
                                        <div class="form-group">
                                            <div class="col-sm-4  control-label">
                                                <span title="What Documents Are Needed?" class="lbl">What Documents Are Needed?</span>
                                                <span class="Astr">*</span>
                                            </div>
                                            <div class="col-sm-8">
                                                <textarea name="ctl00$ctl41$g_582b3796_6aa3_4d31_b5e3_f69be0e2388e$ctl00$txtServiceDocuments" rows="2" cols="20" id="ctl00_ctl41_g_582b3796_6aa3_4d31_b5e3_f69be0e2388e_ctl00_txtServiceDocuments" title="What Documents Are Needed?" class="txtbox" style={{ height: "94px", width: "100%" }}></textarea>

                                                <span id="ctl00_ctl41_g_582b3796_6aa3_4d31_b5e3_f69be0e2388e_ctl00_RequiredFieldValidator5" class="RequiredAstr" style={{ visibility: "hidden" }}>* Mandatory Field</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-xs-12 col-sm-12 col-md-6">
                                        <div class="form-group">
                                            <div class="col-sm-4  control-label">
                                                <span title="How Long Does It Take?" class="lbl">How Long Does It Take?</span>
                                                <span class="Astr">*</span>
                                            </div>
                                            <div class="col-sm-8">
                                                <textarea name="ctl00$ctl41$g_582b3796_6aa3_4d31_b5e3_f69be0e2388e$ctl00$txtServicePeriod" rows="2" cols="20" id="ctl00_ctl41_g_582b3796_6aa3_4d31_b5e3_f69be0e2388e_ctl00_txtServicePeriod" title="How Long Does It Take?" class="txtbox" style={{ height: "94px", width: "100%" }}></textarea>

                                                <span id="ctl00_ctl41_g_582b3796_6aa3_4d31_b5e3_f69be0e2388e_ctl00_RequiredFieldValidator7" class="RequiredAstr" style={{ visibility: "hidden" }}>* Mandatory Field</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-xs-12 col-sm-12 col-md-12 btnsWrapper">
                                        <a id="ctl00_ctl41_g_582b3796_6aa3_4d31_b5e3_f69be0e2388e_ctl00_btnSave" title="Save" class="submitBtn" href="javascript:WebForm_DoPostBackWithOptions(new WebForm_PostBackOptions(&quot;ctl00$ctl41$g_582b3796_6aa3_4d31_b5e3_f69be0e2388e$ctl00$btnSave&quot;, &quot;&quot;, true, &quot;vgService&quot;, &quot;&quot;, false, true))">Save</a>
                                        <a onclick="return Cancel();" id="ctl00_ctl41_g_582b3796_6aa3_4d31_b5e3_f69be0e2388e_ctl00_btnCancel" title="Cancel" class="cancelBtn" href="javascript:WebForm_DoPostBackWithOptions(new WebForm_PostBackOptions(&quot;ctl00$ctl41$g_582b3796_6aa3_4d31_b5e3_f69be0e2388e$ctl00$btnCancel&quot;, &quot;&quot;, true, &quot;&quot;, &quot;&quot;, false, true))">Cancel</a>
                                    </div>
                                </div>
                            </div>
                            {/* <script type="text/javascript">
                                    $(document).ready(function () {

                                    });


                                    if (typeof String.prototype.trim !== 'function') {
                                        String.prototype.trim = function () {
                                            return this.replace(/^\s+|\s+$/g, '');
                                        }
                                    }

                                    function ShowEditMode() {
        var divs = $("#View").find("div");
                                    if (divs.length == 17) {
                                        $('#ctl00_ctl41_g_582b3796_6aa3_4d31_b5e3_f69be0e2388e_ctl00_txtServiceOverview').val($(divs[2]).text().trim());
                                    $('#ctl00_ctl41_g_582b3796_6aa3_4d31_b5e3_f69be0e2388e_ctl00_txtServiceRequestor').val($(divs[5]).text().trim());
                                    $('#ctl00_ctl41_g_582b3796_6aa3_4d31_b5e3_f69be0e2388e_ctl00_txtServiceRequestSteps').val($(divs[8]).text().trim());
                                    $('#ctl00_ctl41_g_582b3796_6aa3_4d31_b5e3_f69be0e2388e_ctl00_txtServiceDocuments').val($(divs[11]).text().trim());
                                    $('#ctl00_ctl41_g_582b3796_6aa3_4d31_b5e3_f69be0e2388e_ctl00_txtServicePeriod').val($(divs[14]).text().trim());
        }
                                    $("#View").hide();
                                    $("#Edit").show();
                                    return false;
    }

                                    function Cancel() {
                                        $("#Edit").hide();
                                    Clear();
                                    $("#View").show();
                                    return false;
    }

                                    function Clear() {
                                        $('#ctl00_ctl41_g_582b3796_6aa3_4d31_b5e3_f69be0e2388e_ctl00_txtServiceOverview').val("");
                                    $('#ctl00_ctl41_g_582b3796_6aa3_4d31_b5e3_f69be0e2388e_ctl00_txtServiceRequestor').val("");
                                    $('#ctl00_ctl41_g_582b3796_6aa3_4d31_b5e3_f69be0e2388e_ctl00_txtServiceRequestSteps').val("");
                                    $('#ctl00_ctl41_g_582b3796_6aa3_4d31_b5e3_f69be0e2388e_ctl00_txtServiceDocuments').val("");
                                    $('#ctl00_ctl41_g_582b3796_6aa3_4d31_b5e3_f69be0e2388e_ctl00_txtServicePeriod').val("");
    }
                                </script> */}

                        </div><div class="ms-clear"></div></div>
                    </div>
                </div>
            </div>
        </div>
        </>
       
    )
}
export default Survey
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}


