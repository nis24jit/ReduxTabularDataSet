/*Utils class for helper functions*/


var Utils = function () {


    function dateConverter() {


        var dateObj = new Date();
        var month = dateObj.getUTCMonth() + 1; //months from 1-12
        var day = dateObj.getUTCDate();
        var year = dateObj.getUTCFullYear();
        var newdate = year + "-" + month + "-" + day;
        return newdate;
    }


    function dynamicSort(property,order) {
        var sortOrder = 1;
        if(property[0] === "-") {
            sortOrder = -1;
            property = property.substr(1);
        }

        if(order==="desc"){

            return function (a,b) {
                var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
                return result * sortOrder;
            }
        }else{

            return function (a,b) {
                var result = (a[property] < b[property]) ? 1 : (a[property] > b[property]) ? -1 : 0;
                return result * sortOrder;
            }
        }


    }
    return {

        dateConverter: dateConverter,
        dynamicSort:dynamicSort

    }
}();


export default Utils;