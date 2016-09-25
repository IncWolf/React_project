/**
 * Created by galushkasergiy on 24.09.16.
 */
let servicedata = ['{"id":1,"title":"Web Design","src":"../img/1.png","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pulvinar lacus sit amet mi bibendum sodales. Nulla mi leo, elementum sit amet rutrum quis, posuere quis metus. Pellentesque in posuere neque, vitae euismod ipsum. Morbi vel tempus tellus. Sed ornare ultricies diam, quis dignissim odio vehicula vel. Morbi venenatis, erat eu commodo condimentum, orci urna sollicitudin neque, vitae iaculis risus sapien suscipit ligula. Donec sodales, velit eu gravida aliquet, nulla odio porttitor erat, at efficitur ante erat ut turpis. Integer scelerisque ipsum elit, at ultricies lorem placerat eget. Sed a ante lorem. Ut eu blandit dui. Quisque tortor sem, facilisis nec elementum ut, faucibus eu elit. Integer pellentesque nisl et ligula rutrum pellentesque. Quisque euismod leo et risus suscipit, vestibulum iaculis orci tristique. Sed non dignissim dolor, eu tincidunt orci. Ut at porttitor tellus. Morbi nec scelerisque lorem, ut accumsan enim."}',
    '{"id":2,"title":"Graphic Design","src":"../img/1.png","description":"Phasellus imperdiet ullamcorper eros, vitae laoreet nibh pharetra sed. In hac habitasse platea dictumst. Nunc at ex ante. Fusce sodales, odio sit amet laoreet sodales, ligula eros dignissim mi, sit amet sodales nisi libero vitae lorem. Quisque tellus magna, malesuada vitae sem nec, vulputate pellentesque purus. Sed lacinia ligula arcu, vitae scelerisque dui scelerisque et. Curabitur auctor convallis enim, quis elementum dolor iaculis interdum."}',
    '{"id":3,"title":"Online Support","src":"../img/1.png","description":"Suspendisse bibendum, metus id pretium sodales, mauris enim sodales enim, nec fermentum neque sem non tortor. Aenean iaculis congue scelerisque. Nunc at fermentum ipsum, et vestibulum odio. Sed vitae molestie orci. Fusce imperdiet nulla id molestie interdum. Nam at ipsum nunc. Morbi in tincidunt lectus. Mauris interdum dolor lacus, sit amet iaculis sem vestibulum placerat."}',
    '{"id":4,"title":"App Design","src":"../img/1.png","description":"Nam mauris mi, mollis quis eleifend sit amet, imperdiet sit amet enim. Sed ut maximus diam. Quisque vitae condimentum orci, at accumsan augue. Sed mattis odio id risus feugiat vulputate. Sed vel tellus malesuada, consequat tellus at, dignissim dolor. Nam viverra aliquet tempus. Sed aliquam elementum ultricies."}',
    '{"id":5,"title":"Online Marketing","src":"../img/1.png","description":"Quisque porttitor augue et placerat facilisis. Morbi quam arcu, imperdiet ac est vitae, ultrices iaculis ex. Aliquam erat volutpat. Cras viverra luctus sem eget pretium. Vestibulum cursus ligula quis sapien tempor, quis mattis magna interdum. Pellentesque iaculis iaculis ante id aliquam. Maecenas vitae porttitor dolor. Pellentesque vitae leo lacus. Ut cursus ultricies mauris nec semper. Ut vel lectus ante. Aliquam nisi nunc, egestas fermentum dolor vel, tempor vestibulum dolor. Quisque euismod maximus arcu ut finibus. Sed nulla nisl, porta id mi at, egestas ultricies nulla. Aliquam tincidunt ligula a sapien rhoncus blandit. Maecenas venenatis turpis at ipsum imperdiet, ac malesuada sapien tincidunt."}',
    '{"id":6,"title":"Seo Service","src":"../img/1.png","description":"Duis feugiat consectetur lorem, non elementum massa fermentum sed. In facilisis tellus sem, sed pretium odio iaculis posuere. Praesent efficitur scelerisque justo, ornare viverra leo condimentum non. Aliquam libero justo, iaculis hendrerit erat ut, fermentum condimentum augue. Duis cursus ipsum rutrum mattis mattis. Praesent vulputate sapien semper magna aliquam, eget suscipit lacus mollis. Aenean ut purus quam. Sed ex orci, aliquet et orci vitae, scelerisque ullamcorper dui. Sed eu ipsum nec dolor venenatis cursus ut quis leo."}'];
let teamdata = ['{"name": "John Doe", "position": "Graphic Designer"}', '{"name": "John Doe", "position": "Graphic Designer"}', '{"name": "John Doe", "position": "Graphic Designer"}', '{"name": "John Doe", "position": "Graphic Designer"}']
let services = [];
let team = [];
for( let i = 0; i < servicedata.length; i++) {
    services[i] = JSON.parse(servicedata[i])
}
for(let i = 0; i < teamdata.length; i++) {
    team[i] = JSON.parse(teamdata[i])
}
const appReducer = (state={services, team}, action) => {
    switch (action.type) {
        default:
            return state;
            break;
    }

};

module.exports = appReducer;