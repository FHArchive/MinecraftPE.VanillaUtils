/*
data/decorBlock.js holds data on decoration blocks in the mod
*/

const DECOR_BLOCK_VAN_ID = [[3,0],[20,0],[152,0],[35,0],[35,1],[35,2],[35,3],[35,4],[35,5],[35,6],[35,7],[35,8],[35,9],[35,10],[35,11],[35,12],[35,13],[35,14],[35,15]];
const DECOR_BLOCK = ["dirt", "glass", "redstone", "wool_white", "wool_orange", "wool_magenta", "wool_blue_light", "wool_yellow", "wool_lime", "wool_pink", "wool_gray", "wool_gray_light", "wool_cyan", "wool_purple", "wool_blue", "wool_brown", "wool_green", "wool_red", "wool_black"];
const DECOR_BLOCK_LEN = DECOR_BLOCK.length;


const GLASS_BLOCK_VAN_ID = [[351, 15],[351, 14],[351, 13],[351, 12],[351, 11],[351, 10],[351, 9],[351, 8],[351, 7],[351, 6],[351, 5],[351, 4],[351, 3],[351, 2],[351, 1],[351, 0]];
const GLASS_BLOCK = ["glass_white", "glass_orange", "glass_magenta", "glass_blue_light", "glass_yellow", "glass_lime", "glass_pink", "glass_gray", "glass_gray_light", "glass_cyan", "glass_purple", "glass_blue", "glass_brown", "glass_green", "glass_red", "glass_black"];
const GLASS_BLOCK_LEN = GLASS_BLOCK.length;


const INCL_LAMP_VAN_ID = [[265,0], [266,0], [264,0], [263, 0], [263, 1], [388, 0]];
const INCL_LAMP = ["iron", "gold", "diamond", "coal", "charcoal", "emerald"];
const INCL_LAMP_LEN = INCL_LAMP.length;

// Tools also have lamps 
const INCL_TOOLS_VAN_ID = [[1,1], [1,3],[348, 0], [351, 4]];
const INCL_TOOLS = ["granite", "diorite", "glowstone", "lapis"];
const INCL_TOOLS_LEN = INCL_TOOLS.length;