var newcss=".flexCard{padding: 0;}"+
    " #accProductsBanner{padding: 0;}"+
    " .rewardsBanner{display: none;}"+
    " .accProductDetail .tableBody tr td,"+
    " .accProductDetail .tableBody tr th { padding: 0; }"+
    " .table>tbody>tr>td,"+
    " .table>tbody>tr>th,"+
    " .table>tfoot>tr>td,"+
    " .table>tfoot>tr>th,"+
    " .table>thead>tr>td,"+
    " .table>thead>tr>th { padding: 0; }";

if("\v"=="v") { //IE Check
    document.createStyleSheet().cssText=newcss
} else {
    var tag=document.createElement("style");
    tag.type="text/css";
    document.getElementsByTagName("head")[0].appendChild(tag);
    tag[(typeof document.body.style.WebkitAppearance=="string") ? "innerText" : "innerHTML"] = newcss
}

