LIBRARY({
	name: "CoreHelpers",
	version: 1,
	shared: true,
    api: "CoreEngine"
});

let CoreHelpers = {
    capFirstLetter: function(name){
        return name.charAt(0).toUpperCase() + name.slice(1);
    },
    
    createIDName: function(rootItem, type){
        return type + CoreHelpers.capFirstLetter(rootItem);
    },
    
    createNameReadable: function(rootItem, type){
        let rootItemParts = rootItem.split("_");
        let rootItemOut = "";
        for (let index = 0; index < rootItemParts.length; index++){
            rootItemOut += CoreHelpers.capFirstLetter(rootItemParts[index]) + " ";
        }
        return rootItemOut + CoreHelpers.capFirstLetter(type);
    
    },
    
    createTexName: function(rootItem, type){
        return rootItem + "_" + type;
    },
    

}

EXPORT("CoreHelpers", CoreHelpers);