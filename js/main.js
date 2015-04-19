$(document).ready(function() {
    console.log('Document ready!');

    // var url = 'https://api.instagram.com/v1/tags/chashubao/media/recent?access_token=ACCESS-TOKEN';
    var url = 'https://www.googleapis.com/freebase/v1/topic/m/09yhzs';


    $.get(url, createKP);

    function createKP(entity, event) {
    //     $('.kp').fadeIn();

    //     console.log(entity);
    //     var d = entity['property'];

    //     function populateFacts(element,fact){
    //         var count=fact.count;
    //         //console.log(fact);

    //         for(var i=0; i<count; i++) {
    //             if (i != 0) {
    //                 $(element).append(', ');
    //             }

    //             var value = fact['values'][i]['text'];

    //             //should we link it?
    //             if (fact['values'][i]['id'] != undefined) {
    //                 $(element).append('<a href="#">'+value+'</a>');
    //             }
    //             else {
    //                 $(element).append(value);
    //             }
    //         }
    }


    //     //title
    //     var element = '.kp h3';
    //     var fact = d['/type/object/name']['values'][0]['text'];
    //     $(element).text(fact);

    //     //dsecription
    //     var element = '.kp .description';
    //     var fact = d['/common/topic/article']['values'][0]['text'];
    //     $(element).text(fact);

    //     //birthday
    //     var element = '.kp .birthday .value';
    //     var fact = d['/people/person/date_of_birth'];
    //     populateFacts(element,fact);

    //     //weight
    //     var element = '.kp .weight .value';
    //     var fact = d['/people/person/weight_kg'];
    //     populateFacts(element,fact);

    //     //height
    //     var element = '.kp .height .value';
    //     var fact = d['/people/person/height_meters'];
    //     populateFacts(element,fact);

    //     //siblings
    //     var element = '.kp .siblings .value';
    //     var fact = d['/people/person/sibling_s'];
    //     populateFacts(element,fact);

    //     //parents
    //     var element = '.kp .parents .value';
    //     var fact = d['/people/person/parents'];
    //     populateFacts(element,fact);

    //     //get image
    //     var element = '.entity img';
    //     //$(element).css('background-image', 'url('+img+')');

    //     console.log(event);
    // }

});