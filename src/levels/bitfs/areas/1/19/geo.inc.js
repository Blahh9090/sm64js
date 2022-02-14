// Bitfs

import {
    GEO_CULLING_RADIUS, GEO_OPEN_NODE, GEO_DISPLAY_LIST, GEO_CLOSE_NODE, GEO_END,
    LAYER_TRANSPARENT
} from "../../../../../engine/GeoLayout"

import { bitfs_seg7_dl_0700ED90 } from "./model.inc"

// 0x0E000648
export const bitfs_geo_000648 = () => {return [
    GEO_CULLING_RADIUS(600),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, bitfs_seg7_dl_0700ED90),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 2021-07-09 10:07:11 -0400 (Convert.rb 2021-06-14 09:43:28 -0400)
