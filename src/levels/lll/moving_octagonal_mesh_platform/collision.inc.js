// Lll

import {
    COL_INIT, COL_VERTEX_INIT, COL_VERTEX, COL_TRI_INIT, COL_TRI, COL_TRI_STOP, COL_END,
    SURFACE_DEFAULT
} from "../../../include/surface_terrains"

// 0x0701D018 - 0x0701D108
export const lll_seg7_collision_octagonal_moving_platform = [
    COL_INIT(),
    COL_VERTEX_INIT(0x10),
    COL_VERTEX(-255, 0, -127),
    COL_VERTEX(-127, 154, -255),
    COL_VERTEX(-127, 0, -255),
    COL_VERTEX(256, 154, 128),
    COL_VERTEX(256, 154, -127),
    COL_VERTEX(128, 154, 256),
    COL_VERTEX(-127, 154, 256),
    COL_VERTEX(-255, 154, 128),
    COL_VERTEX(-255, 154, -127),
    COL_VERTEX(128, 154, -255),
    COL_VERTEX(-255, 0, 128),
    COL_VERTEX(-127, 0, 256),
    COL_VERTEX(128, 0, 256),
    COL_VERTEX(256, 0, 128),
    COL_VERTEX(256, 0, -127),
    COL_VERTEX(128, 0, -255),
    COL_TRI_INIT(SURFACE_DEFAULT, 22),
    COL_TRI(12, 6, 11),
    COL_TRI(0, 1, 2),
    COL_TRI(1, 3, 4),
    COL_TRI(1, 5, 3),
    COL_TRI(1, 6, 5),
    COL_TRI(1, 7, 6),
    COL_TRI(1, 8, 7),
    COL_TRI(1, 4, 9),
    COL_TRI(0, 8, 1),
    COL_TRI(2, 1, 9),
    COL_TRI(10, 8, 0),
    COL_TRI(10, 7, 8),
    COL_TRI(11, 7, 10),
    COL_TRI(11, 6, 7),
    COL_TRI(12, 5, 6),
    COL_TRI(2, 9, 15),
    COL_TRI(13, 5, 12),
    COL_TRI(13, 3, 5),
    COL_TRI(14, 3, 13),
    COL_TRI(14, 4, 3),
    COL_TRI(15, 4, 14),
    COL_TRI(15, 9, 4),
    COL_TRI_STOP(),
    COL_END(),
].flat();

// 2021-07-08 16:08:31 -0400 (Convert.rb 2021-06-14 09:43:28 -0400)
