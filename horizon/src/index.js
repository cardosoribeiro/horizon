const myText = `
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc purus justo, dapibus non turpis sit amet, elementum vestibulum arcu. Nunc eu ligula a elit bibendum placerat eget vitae lacus. Cras nec semper lectus. Fusce pulvinar aliquam maximus. Curabitur convallis ipsum erat, quis pharetra turpis varius id. Donec varius erat eu odio ultricies, eu hendrerit ipsum faucibus. Maecenas iaculis sodales leo sit amet tristique.</p>

<p>In arcu turpis, cursus bibendum purus id, imperdiet facilisis magna. Nam maximus porta placerat. Mauris quis dignissim sapien. Sed in dolor pulvinar, auctor neque eu, porttitor arcu. Nulla dui mauris, pulvinar ac volutpat sed, congue eu neque. Fusce scelerisque sapien nisi, quis ullamcorper nisl eleifend non. Sed sed orci nec tortor condimentum laoreet. Pellentesque rhoncus mauris sit amet tortor scelerisque consequat.</p>

<p>Mauris placerat augue vel elit euismod auctor. Aliquam erat volutpat. Nunc finibus arcu arcu, quis commodo ante blandit id. Sed ac diam ultrices mi blandit efficitur et et ante. Donec non metus nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras placerat urna vitae metus rutrum, a interdum diam fringilla. Sed pellentesque vehicula nisi. Pellentesque nunc turpis, sodales ac interdum vitae, molestie et justo. Nulla condimentum sodales est, in consectetur ligula rhoncus eget. Ut porta, eros id blandit posuere, ipsum sem cursus orci, ut convallis massa tellus ut est. Pellentesque faucibus eros sit amet nunc maximus, et viverra metus luctus. Sed dignissim blandit enim ullamcorper sollicitudin.</p>

<p>Duis mollis, ex vitae commodo facilisis, tellus urna fringilla nibh, tincidunt sollicitudin massa tellus eget tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed quis volutpat tellus. Etiam lobortis tempus commodo. Donec tristique ex at tincidunt rutrum. Morbi dolor orci, viverra vitae sem vel, dictum rhoncus lorem. Integer tempor ipsum neque, id porttitor magna tincidunt nec. Proin a mi vel ipsum fermentum varius sit amet id risus. In blandit sed nisl a consectetur. Sed aliquam dui at arcu ullamcorper mollis. Nullam massa ex, finibus non rutrum nec, mattis sed tellus. Donec vitae mattis orci.</p>

<p>Maecenas ac sem tempor nisl hendrerit viverra. Donec vel mi sit amet justo auctor eleifend. Nam a laoreet urna, in eleifend dui. Donec dui tellus, fringilla nec nisl tempor, porttitor dictum enim. Mauris lobortis nisi ac commodo fringilla. Aenean est magna, feugiat a mattis id, finibus hendrerit massa. Nunc eget nibh sit amet tortor venenatis hendrerit vel ut massa. Curabitur feugiat eget diam vel dignissim.</p>
`;


$(document).ready(function() {
    updadeDocumentObjectModel();        
});

function updadeDocumentObjectModel() {
    loadContent();
}

function loadContent() {
    $("#content").html(myText);
}


