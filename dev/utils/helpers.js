function capFirstLetter(name){
    return name.charAt(0).toUpperCase() + name.slice(1);
}

function createIDName(rootItem, type){
    return type + capFirstLetter(rootItem);
}

function createNameReadable(rootItem, type){
    var rootItemParts = rootItem.split("_");
    var rootItemOut = "";
    for (var index = 0; index < rootItemParts.length; index++){
        rootItemOut += capFirstLetter(rootItemParts[index]) + " ";
    }
    return rootItemOut + capFirstLetter(type);

}

function createTexName(rootItem, type){
    return rootItem + "_" + type;
}
