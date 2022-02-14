// Bitfs

import {
    COL_INIT, COL_VERTEX_INIT, COL_VERTEX, COL_TRI_INIT, COL_TRI, COL_TRI_STOP, COL_END,
    SURFACE_DEFAULT, SURFACE_NOT_SLIPPERY
} from "../../../include/surface_terrains"

// 0x07015858 - 0x07015928
export const bitfs_seg7_collision_sinking_platform = [
    COL_INIT(),
    COL_VERTEX_INIT(0xE),
    COL_VERTEX(922, 0, 614),
    COL_VERTEX(614, 56, 614),
    COL_VERTEX(307, 0, 614),
    COL_VERTEX(922, 0, -613),
    COL_VERTEX(307, 0, -613),
    COL_VERTEX(614, 56, -613),
    COL_VERTEX(0, 56, 614),
    COL_VERTEX(-306, 0, 614),
    COL_VERTEX(-613, 56, 614),
    COL_VERTEX(-921, 0, 614),
    COL_VERTEX(-306, 0, -613),
    COL_VERTEX(0, 56, -613),
    COL_VERTEX(-921, 0, -613),
    COL_VERTEX(-613, 56, -613),
    COL_TRI_INIT(SURFACE_DEFAULT, 6),
    COL_TRI(0, 1, 2),
    COL_TRI(3, 4, 5),
    COL_TRI(2, 6, 7),
    COL_TRI(7, 8, 9),
    COL_TRI(4, 10, 11),
    COL_TRI(10, 12, 13),
    COL_TRI_INIT(SURFACE_NOT_SLIPPERY, 12),
    COL_TRI(5, 1, 0),
    COL_TRI(12, 8, 13),
    COL_TRI(12, 9, 8),
    COL_TRI(13, 8, 7),
    COL_TRI(13, 7, 10),
    COL_TRI(10, 7, 6),
    COL_TRI(10, 6, 11),
    COL_TRI(11, 6, 2),
    COL_TRI(11, 2, 4),
    COL_TRI(4, 2, 1),
    COL_TRI(4, 1, 5),
    COL_TRI(5, 0, 3),
    COL_TRI_STOP(),
    COL_END(),
].flat();

// 2021-07-09 10:07:11 -0400 (Convert.rb 2021-06-14 09:43:28 -0400)
