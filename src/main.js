var newcss=".flexCard { padding: 0; }"+
    " #accProductsBanner { padding: 0; }"+
    " .rewardsBanner { display: none; }"+
    " .accProductDetail .tableBody tr td,"+
    " .accProductDetail .tableBody tr th { padding: 0; }"+
	" .accProductDetail .tableBody tr th a { margin-bottom: 0px; }"+
    " .table>tbody>tr>td,"+
    " .table>tbody>tr>th,"+
    " .table>tfoot>tr>td,"+
    " .table>tfoot>tr>th,"+
    " .table>thead>tr>td,"+
    " .table>thead>tr>th { padding: 0; }"+
	" #topTools { height: auto; }"+
	" #topTools.topToolsAlt { margin: 5px 0; }"+
	" .utilityBar { margin-top: 20px; }"+
	" .accNewSubProduct, .bodyPromotion, .investingAd, .bt-ad { display: none }"+
	" .genericTable .tableBody > tr > td,"+
	" .genericTable .tableBody > tr > th { padding: 0px; }"+
	" .accFinanceTracker { display: none; }"+
	" .sidebarPromo { display: none; }"+
	" #legal, .accountSummaryLegal { display: none; }"+
	" #footerWrapper { display: none; }"+
	" #pdaPaymentForm .formInputInline { padding: 5px; }"+
	" #secGenProductBanner { padding: 5px; margin-bottom: 5px; }"+
	" .tableSort { margin: 5px 0; padding: 5px 0 0px; }"+
	" .cardInfoCont p.primaryNum { margin-bottom: 0px; }"+
	" .primaryNum { font-size: 120%; }"+
	" .cardImageCont img { display: none; }";

if("\v"=="v") { //IE Check
    document.createStyleSheet().cssText=newcss
} else {
    var tag=document.createElement("style");
    tag.type="text/css";
    document.getElementsByTagName("head")[0].appendChild(tag);
    tag[(typeof document.body.style.WebkitAppearance=="string") ? "innerText" : "innerHTML"] = newcss
		
    var sideBar = document.getElementById("sideBar");
    sideBar.className += " col-xs-pull-9";
		
    var mainBody = document.getElementById("mainBody");
    mainBody.className += " col-xs-push-3";
}

