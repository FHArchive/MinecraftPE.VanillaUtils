LIBRARY({
	name: "ItemLib",
	version: 1,
	shared: true,
    api: "CoreEngine",
    dependencies: ["ToolLib:1", "CoreHelpers:1"]
});

/*
Requires ToolLib, CoreHelpers
*/

IMPORT("CoreHelpers");
IMPORT("ToolLib");


let ItemLib = {
    ITEMLIB_ARMOR_MAX_DAM_RED: {
        helm: 11,
        chest: 16,
        leggings: 15,
        boots: 13
    },

    createSimpleItem: function(name){
        IDRegistry.genItemID(name);
        Item.createItem(name, CoreHelpers.capFirstLetter(name), {name: name});
    },
    createTool: function(baseName, type){
        let toolIDName = CoreHelpers.createIDName(baseName, type);
        IDRegistry.genItemID(toolIDName);
        Item.createItem(toolIDName, CoreHelpers.createNameReadable(baseName, type), {name: CoreHelpers.createTexName(baseName, type), meta: 0}, {stack: 1});
        ToolAPI.setTool(ItemID[toolIDName], baseName, ToolType[type]);

    },

    createArmor: function(armorProperties, baseName, type){
        // Eg. ArmorProperties
        // let ArmorProperties = {
        //     granite: {
        //         durability: 23,
        //         helm: { armor : 1, texture: "armor/granite_layer_1.png"}, 
        //         chest: {armor : 3, texture: "armor/granite_layer_1.png"}, 
        //         leggings: {armor : 2, texture: "armor/granite_layer_2.png"}, 
        //         boots: {armor : 1, texture: "armor/granite_layer_1.png"}}

        let armorIDName = CoreHelpers.createIDName(baseName, type);

        let armorType = type;
        // For compatibility with my naming conventions 
        if (type === "helm"){
            armorType = "helmet";
        }
        if (type === "chest"){
            armorType = "chestplate";
        }

        // Create the armor item 
        IDRegistry.genItemID(armorIDName);
        Item.createArmorItem(armorIDName, CoreHelpers.createNameReadable(baseName, type), {name: CoreHelpers.createTexName(baseName, type)}, {type: armorType, armor: armorProperties[baseName][type].armor, durability: armorProperties[baseName].durability * ItemLib.ITEMLIB_ARMOR_MAX_DAM_RED[type], texture: armorProperties[baseName][type].texture});
    }

    
    


};


EXPORT("ItemLib", ItemLib);