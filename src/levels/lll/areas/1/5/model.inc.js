// 0x07013DB8 - 0x07013EA8

import {
    gsDPSetTextureImage, gsDPLoadSync, gsDPLoadBlock, gsSPLight, gsSPVertex, gsSP2Triangles,
    gsSP1Triangle, gsSPEndDisplayList, gsDPPipeSync, gsDPSetCombineMode, gsSPClearGeometryMode,
    gsDPSetTile, gsSPTexture, gsDPTileSync, gsDPSetTileSize, gsSPDisplayList, gsSPSetGeometryMode,
    G_IM_FMT_RGBA, G_IM_SIZ_16b, CALC_DXT, G_TX_LOADTILE, G_IM_SIZ_16b_BYTES, G_CC_MODULATERGB,
    G_SHADING_SMOOTH, G_TX_WRAP, G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD, G_TX_RENDERTILE, G_ON,
    G_TX_CLAMP, G_TEXTURE_IMAGE_FRAC, G_OFF, G_CC_SHADE
} from "../../../../../include/gbi"
import {
    fire_09007800, fire_09007000
} from "../../../../../textures/fire"

import { lll_seg7_lights_0700FC00 } from "../light.inc"

const lll_seg7_vertex_07013DB8 = [
    [[   256,      0,   1024], 0, [   990,    990], [0xa7, 0x00, 0xa7, 0xff]],
    [[   512,    154,    768], 0, [ -1416,      0], [0xa7, 0x00, 0xa7, 0xff]],
    [[   512,      0,    768], 0, [ -1416,    990], [0xa7, 0x00, 0xa7, 0xff]],
    [[   512,      0,   1280], 0, [  1454,    990], [0x0b, 0x00, 0x7e, 0xff]],
    [[   512,    154,   1280], 0, [  1454,      0], [0x0b, 0x00, 0x7e, 0xff]],
    [[  -895,    154,   1408], 0, [ -6162,      0], [0x0b, 0x00, 0x7e, 0xff]],
    [[  -895,      0,   1408], 0, [ -6162,    990], [0x0b, 0x00, 0x7e, 0xff]],
    [[  -895,      0,   1408], 0, [  3034,    990], [0x81, 0x00, 0x00, 0xff]],
    [[  -895,    154,   1408], 0, [  3034,      0], [0x81, 0x00, 0x00, 0xff]],
    [[  -895,    154,   1024], 0, [  -370,      0], [0x81, 0x00, 0x00, 0xff]],
    [[  -895,      0,   1024], 0, [  -370,    990], [0x81, 0x00, 0x00, 0xff]],
    [[  -895,      0,   1024], 0, [   990,    990], [0x00, 0x00, 0x81, 0xff]],
    [[   256,    154,   1024], 0, [ -5150,      0], [0x00, 0x00, 0x81, 0xff]],
    [[   256,      0,   1024], 0, [ -5150,    990], [0x00, 0x00, 0x81, 0xff]],
    [[  -895,    154,   1024], 0, [   990,      0], [0x00, 0x00, 0x81, 0xff]],
];

// 0x07013EA8 - 0x07013F98
const lll_seg7_vertex_07013EA8 = [
    [[  -127,      0,    640], 0, [   990,    990], [0x88, 0x00, 0x28, 0xff]],
    [[  -383,    154,   -127], 0, [ -6626,      0], [0x88, 0x00, 0x28, 0xff]],
    [[  -383,      0,   -127], 0, [ -6626,    990], [0x88, 0x00, 0x28, 0xff]],
    [[   256,      0,   1024], 0, [   990,    990], [0xa7, 0x00, 0xa7, 0xff]],
    [[   256,    154,   1024], 0, [   990,      0], [0xa7, 0x00, 0xa7, 0xff]],
    [[   512,    154,    768], 0, [ -1416,      0], [0xa7, 0x00, 0xa7, 0xff]],
    [[   512,      0,    768], 0, [   990,    990], [0xc8, 0x00, 0x71, 0xff]],
    [[   512,    154,    768], 0, [   990,      0], [0xc8, 0x00, 0x71, 0xff]],
    [[   256,    154,    640], 0, [ -1416,      0], [0xc8, 0x00, 0x71, 0xff]],
    [[   256,      0,    640], 0, [ -1416,    990], [0xc8, 0x00, 0x71, 0xff]],
    [[   256,      0,    640], 0, [  1330,    990], [0x00, 0x00, 0x7f, 0xff]],
    [[   256,    154,    640], 0, [  1330,      0], [0x00, 0x00, 0x7f, 0xff]],
    [[  -127,    154,    640], 0, [ -2074,      0], [0x00, 0x00, 0x7f, 0xff]],
    [[  -127,      0,    640], 0, [ -2074,    990], [0x00, 0x00, 0x7f, 0xff]],
    [[  -127,    154,    640], 0, [   990,      0], [0x88, 0x00, 0x28, 0xff]],
];

// 0x07013F98 - 0x07014088
const lll_seg7_vertex_07013F98 = [
    [[   256,      0,   -895], 0, [  7122,    990], [0xec, 0x00, 0x7d, 0xff]],
    [[  -511,    154,  -1023], 0, [    98,      0], [0xec, 0x00, 0x7d, 0xff]],
    [[  -511,      0,  -1023], 0, [    98,    990], [0xec, 0x00, 0x7d, 0xff]],
    [[  -383,      0,   -127], 0, [   990,    990], [0x81, 0x00, 0x00, 0xff]],
    [[  -383,    154,   -511], 0, [ -2414,      0], [0x81, 0x00, 0x00, 0xff]],
    [[  -383,      0,   -511], 0, [ -2414,    990], [0x81, 0x00, 0x00, 0xff]],
    [[  -383,    154,   -127], 0, [   990,      0], [0x81, 0x00, 0x00, 0xff]],
    [[  -383,      0,   -511], 0, [  7122,    990], [0xe8, 0x00, 0x84, 0xff]],
    [[  -383,    154,   -511], 0, [  7122,      0], [0xe8, 0x00, 0x84, 0xff]],
    [[   256,    154,   -639], 0, [    98,      0], [0xe8, 0x00, 0x84, 0xff]],
    [[   256,      0,   -639], 0, [    98,    990], [0xe8, 0x00, 0x84, 0xff]],
    [[   256,      0,   -639], 0, [   990,    990], [0x81, 0x00, 0x00, 0xff]],
    [[   256,    154,   -895], 0, [  -712,      0], [0x81, 0x00, 0x00, 0xff]],
    [[   256,      0,   -895], 0, [  -712,    990], [0x81, 0x00, 0x00, 0xff]],
    [[   256,    154,   -639], 0, [   990,      0], [0x81, 0x00, 0x00, 0xff]],
];

// 0x07014088 - 0x07014178
const lll_seg7_vertex_07014088 = [
    [[  -895,      0,  -1407], 0, [   650,    990], [0x00, 0x00, 0x81, 0xff]],
    [[  -639,    154,  -1407], 0, [ -1052,      0], [0x00, 0x00, 0x81, 0xff]],
    [[  -639,      0,  -1407], 0, [ -1052,    990], [0x00, 0x00, 0x81, 0xff]],
    [[   256,      0,   -895], 0, [  7122,    990], [0xec, 0x00, 0x7d, 0xff]],
    [[   256,    154,   -895], 0, [  7122,      0], [0xec, 0x00, 0x7d, 0xff]],
    [[  -511,    154,  -1023], 0, [    98,      0], [0xec, 0x00, 0x7d, 0xff]],
    [[  -511,      0,  -1023], 0, [  5078,    990], [0x00, 0x00, 0x7f, 0xff]],
    [[  -511,    154,  -1023], 0, [  5078,      0], [0x00, 0x00, 0x7f, 0xff]],
    [[  -895,    154,  -1023], 0, [     0,      0], [0x00, 0x00, 0x7f, 0xff]],
    [[  -895,      0,  -1023], 0, [     0,    990], [0x00, 0x00, 0x7f, 0xff]],
    [[  -895,      0,  -1023], 0, [   990,    990], [0x81, 0x00, 0x00, 0xff]],
    [[  -895,    154,  -1407], 0, [ -2414,      0], [0x81, 0x00, 0x00, 0xff]],
    [[  -895,      0,  -1407], 0, [ -2414,    990], [0x81, 0x00, 0x00, 0xff]],
    [[  -895,    154,  -1023], 0, [   990,      0], [0x81, 0x00, 0x00, 0xff]],
    [[  -895,    154,  -1407], 0, [   650,      0], [0x00, 0x00, 0x81, 0xff]],
];

// 0x07014178 - 0x07014278
const lll_seg7_vertex_07014178 = [
    [[  -639,      0,  -1407], 0, [  1750,    990], [0x24, 0x00, 0x87, 0xff]],
    [[  -639,    154,  -1407], 0, [  1750,      0], [0x24, 0x00, 0x87, 0xff]],
    [[   640,    154,  -1023], 0, [-12294,      0], [0x24, 0x00, 0x87, 0xff]],
    [[   640,      0,  -1023], 0, [-12294,    990], [0x24, 0x00, 0x87, 0xff]],
    [[   640,      0,  -1023], 0, [   990,    990], [0x7f, 0x00, 0x00, 0xff]],
    [[   640,    154,  -1023], 0, [   990,      0], [0x7f, 0x00, 0x00, 0xff]],
    [[   640,    154,   -511], 0, [ -4118,      0], [0x7f, 0x00, 0x00, 0xff]],
    [[   640,      0,   -511], 0, [ -4118,    990], [0x7f, 0x00, 0x00, 0xff]],
    [[   640,      0,   -511], 0, [   860,    990], [0x2f, 0x00, 0x75, 0xff]],
    [[   640,    154,   -511], 0, [   860,      0], [0x2f, 0x00, 0x75, 0xff]],
    [[     0,    154,   -255], 0, [ -6162,      0], [0x2f, 0x00, 0x75, 0xff]],
    [[     0,      0,   -255], 0, [ -6162,    990], [0x2f, 0x00, 0x75, 0xff]],
    [[     0,      0,   -255], 0, [  1672,    990], [0x7f, 0x00, 0x00, 0xff]],
    [[     0,    154,   -255], 0, [  1672,      0], [0x7f, 0x00, 0x00, 0xff]],
    [[     0,    154,   -127], 0, [     0,      0], [0x7f, 0x00, 0x00, 0xff]],
    [[     0,      0,   -127], 0, [     0,    990], [0x7f, 0x00, 0x00, 0xff]],
];

// 0x07014278 - 0x07014378
const lll_seg7_vertex_07014278 = [
    [[     0,      0,   -127], 0, [  3776,    990], [0x78, 0x00, 0xd8, 0xff]],
    [[     0,    154,   -127], 0, [  3776,      0], [0x78, 0x00, 0xd8, 0xff]],
    [[   128,    154,    256], 0, [     0,      0], [0x78, 0x00, 0xd8, 0xff]],
    [[   128,      0,    256], 0, [     0,    990], [0x78, 0x00, 0xd8, 0xff]],
    [[   128,      0,    256], 0, [  3374,    990], [0x00, 0x00, 0x81, 0xff]],
    [[   512,    154,    256], 0, [     0,      0], [0x00, 0x00, 0x81, 0xff]],
    [[   512,      0,    256], 0, [     0,    990], [0x00, 0x00, 0x81, 0xff]],
    [[   128,    154,    256], 0, [  3374,      0], [0x00, 0x00, 0x81, 0xff]],
    [[   512,      0,    256], 0, [  1062,    990], [0x65, 0x00, 0xb4, 0xff]],
    [[   512,    154,    256], 0, [  1062,      0], [0x65, 0x00, 0xb4, 0xff]],
    [[   896,    154,    768], 0, [ -6162,      0], [0x65, 0x00, 0xb4, 0xff]],
    [[   896,      0,    768], 0, [ -6162,    990], [0x65, 0x00, 0xb4, 0xff]],
    [[   896,      0,    768], 0, [  1062,    990], [0x65, 0x00, 0x4c, 0xff]],
    [[   896,    154,    768], 0, [  1062,      0], [0x65, 0x00, 0x4c, 0xff]],
    [[   512,    154,   1280], 0, [ -6162,      0], [0x65, 0x00, 0x4c, 0xff]],
    [[   512,      0,   1280], 0, [ -6162,    990], [0x65, 0x00, 0x4c, 0xff]],
];

// 0x07014378 - 0x07014478
const lll_seg7_vertex_07014378 = [
    [[  -383,    154,   -127], 0, [ -1052,  -4120], [0x00, 0x7f, 0x00, 0xff]],
    [[   256,    154,    640], 0, [ -3608,  -7186], [0x00, 0x7f, 0x00, 0xff]],
    [[   512,    154,    768], 0, [ -4630,  -7696], [0x00, 0x7f, 0x00, 0xff]],
    [[   640,    154,  -1023], 0, [ -5140,   -542], [0x00, 0x7f, 0x00, 0xff]],
    [[  -639,    154,  -1407], 0, [     0,    990], [0x00, 0x7f, 0x00, 0xff]],
    [[   256,    154,   -895], 0, [ -3606,  -1054], [0x00, 0x7f, 0x00, 0xff]],
    [[  -511,    154,  -1023], 0, [  -542,   -542], [0x00, 0x7f, 0x00, 0xff]],
    [[  -895,    154,  -1023], 0, [   990,   -542], [0x00, 0x7f, 0x00, 0xff]],
    [[  -895,    154,  -1407], 0, [   990,    990], [0x00, 0x7f, 0x00, 0xff]],
    [[   256,    154,   -639], 0, [ -3606,  -2076], [0x00, 0x7f, 0x00, 0xff]],
    [[     0,    154,   -255], 0, [ -2586,  -3608], [0x00, 0x7f, 0x00, 0xff]],
    [[  -383,    154,   -511], 0, [ -1052,  -2586], [0x00, 0x7f, 0x00, 0xff]],
    [[   128,    154,    256], 0, [ -3096,  -5652], [0x00, 0x7f, 0x00, 0xff]],
    [[     0,    154,   -127], 0, [ -2586,  -4120], [0x00, 0x7f, 0x00, 0xff]],
    [[  -127,    154,    640], 0, [ -2074,  -7186], [0x00, 0x7f, 0x00, 0xff]],
    [[   640,    154,   -511], 0, [ -5140,  -2586], [0x00, 0x7f, 0x00, 0xff]],
];

// 0x07014478 - 0x070144F8
const lll_seg7_vertex_07014478 = [
    [[   512,    154,    768], 0, [ -4630,  -7696], [0x00, 0x7f, 0x00, 0xff]],
    [[   256,    154,   1024], 0, [ -3608,  -8718], [0x00, 0x7f, 0x00, 0xff]],
    [[   896,    154,    768], 0, [ -6162,  -7696], [0x00, 0x7f, 0x00, 0xff]],
    [[   128,    154,    256], 0, [ -3096,  -5652], [0x00, 0x7f, 0x00, 0xff]],
    [[   512,    154,   1280], 0, [ -4630,  -9740], [0x00, 0x7f, 0x00, 0xff]],
    [[  -895,    154,   1408], 0, [   990, -10252], [0x00, 0x7f, 0x00, 0xff]],
    [[  -895,    154,   1024], 0, [   990,  -8718], [0x00, 0x7f, 0x00, 0xff]],
    [[   512,    154,    256], 0, [ -4630,  -5652], [0x00, 0x7f, 0x00, 0xff]],
];

// 0x070144F8 - 0x070146B8
const lll_seg7_dl_070144F8 = [
    gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, fire_09007800),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 32 * 32 - 1, CALC_DXT(32, G_IM_SIZ_16b_BYTES)),
    gsSPLight(lll_seg7_lights_0700FC00.l, 1),
    gsSPLight(lll_seg7_lights_0700FC00.a, 2),
    gsSPVertex(lll_seg7_vertex_07013DB8, 15, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
    gsSP2Triangles( 3,  5,  6, 0x0,  7,  8,  9, 0x0),
    gsSP2Triangles( 7,  9, 10, 0x0, 11, 12, 13, 0x0),
    gsSP1Triangle(11, 14, 12, 0x0),
    gsSPVertex(lll_seg7_vertex_07013EA8, 15, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
    gsSP2Triangles( 6,  7,  8, 0x0,  6,  8,  9, 0x0),
    gsSP2Triangles(10, 11, 12, 0x0, 10, 12, 13, 0x0),
    gsSP1Triangle( 0, 14,  1, 0x0),
    gsSPVertex(lll_seg7_vertex_07013F98, 15, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
    gsSP2Triangles( 3,  6,  4, 0x0,  7,  8,  9, 0x0),
    gsSP2Triangles( 7,  9, 10, 0x0, 11, 12, 13, 0x0),
    gsSP1Triangle(11, 14, 12, 0x0),
    gsSPVertex(lll_seg7_vertex_07014088, 15, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
    gsSP2Triangles( 6,  7,  8, 0x0,  6,  8,  9, 0x0),
    gsSP2Triangles(10, 11, 12, 0x0, 10, 13, 11, 0x0),
    gsSP1Triangle( 0, 14,  1, 0x0),
    gsSPVertex(lll_seg7_vertex_07014178, 16, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
    gsSP2Triangles( 4,  5,  6, 0x0,  4,  6,  7, 0x0),
    gsSP2Triangles( 8,  9, 10, 0x0,  8, 10, 11, 0x0),
    gsSP2Triangles(12, 13, 14, 0x0, 12, 14, 15, 0x0),
    gsSPVertex(lll_seg7_vertex_07014278, 16, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
    gsSP2Triangles( 4,  5,  6, 0x0,  4,  7,  5, 0x0),
    gsSP2Triangles( 8,  9, 10, 0x0,  8, 10, 11, 0x0),
    gsSP2Triangles(12, 13, 14, 0x0, 12, 14, 15, 0x0),
    gsSPEndDisplayList(),
].flat();

// 0x070146B8 - 0x07014788
const lll_seg7_dl_070146B8 = [
    gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, fire_09007000),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 32 * 32 - 1, CALC_DXT(32, G_IM_SIZ_16b_BYTES)),
    gsSPVertex(lll_seg7_vertex_07014378, 16, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
    gsSP2Triangles( 4,  6,  5, 0x0,  4,  7,  6, 0x0),
    gsSP2Triangles( 4,  8,  7, 0x0,  3,  5,  9, 0x0),
    gsSP2Triangles(10,  9,  0, 0x0, 10,  3,  9, 0x0),
    gsSP2Triangles( 9, 11,  0, 0x0,  0, 12, 13, 0x0),
    gsSP2Triangles( 0, 13, 10, 0x0,  0,  2, 12, 0x0),
    gsSP2Triangles( 0, 14,  1, 0x0, 10, 15,  3, 0x0),
    gsSPVertex(lll_seg7_vertex_07014478, 8, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
    gsSP2Triangles( 1,  4,  2, 0x0,  1,  5,  4, 0x0),
    gsSP2Triangles( 1,  6,  5, 0x0,  2,  7,  3, 0x0),
    gsSPEndDisplayList(),
].flat();

// 0x07014788 - 0x07014818
export const lll_seg7_dl_07014788 = [
    gsDPPipeSync(),
    gsDPSetCombineMode(G_CC_MODULATERGB, G_CC_MODULATERGB),
    gsSPClearGeometryMode(G_SHADING_SMOOTH),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 0, 0, G_TX_LOADTILE, 0, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_ON),
    gsDPTileSync(),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 8, 0, G_TX_RENDERTILE, 0, G_TX_CLAMP, 5, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, 5, G_TX_NOLOD),
    gsDPSetTileSize(0, 0, 0, (32 - 1) << G_TEXTURE_IMAGE_FRAC, (32 - 1) << G_TEXTURE_IMAGE_FRAC),
    gsSPDisplayList(lll_seg7_dl_070144F8),
    gsDPTileSync(),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 8, 0, G_TX_RENDERTILE, 0, G_TX_WRAP | G_TX_NOMIRROR, 5, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, 5, G_TX_NOLOD),
    gsDPSetTileSize(0, 0, 0, (32 - 1) << G_TEXTURE_IMAGE_FRAC, (32 - 1) << G_TEXTURE_IMAGE_FRAC),
    gsSPDisplayList(lll_seg7_dl_070146B8),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_OFF),
    gsDPPipeSync(),
    gsDPSetCombineMode(G_CC_SHADE, G_CC_SHADE),
    gsSPSetGeometryMode(G_SHADING_SMOOTH),
    gsSPEndDisplayList(),
].flat();

// 2021-07-08 16:08:31 -0400 (Convert.rb 2021-06-14 09:43:28 -0400)
