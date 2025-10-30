
const spec = {
    "$schema": "https://vega.github.io/schema/vega/v5.json",
    "width": 960,
    "height": 640,
    "autosize": "none",

    "signals": [
        // global values
        {"name": "br_center", "value": [-51.9253, -14.2350]},
        {"name": "br_opacity", "value": 0.4},
        {"name": "br_blend", "value": "normal"},
        {"name": "grid_opacity", "value": .4},
        {"name": "zoom", "value": 640},

        // color code for each projection
        {"name": "albers_color", "value": "rgba(204, 0, 255)"},
        {"name": "az_color", "value": "rgba(0, 44, 255)"},
        {"name": "conic_color", "value": "rgba(0, 212, 255)"},
        {"name": "mercator_color", "value": "rgba(8, 233, 8)"},
        {"name": "ortho_color", "value": "rgba(230, 230, 0)"},
        {"name": "stereo_color", "value": "rgba(255, 0, 128)"},
        
        // controling on and off view for each projection
        {
        "name": "show_albers", 
        "value": true,
        "bind": {"input": "checkbox", "name": "Albers"}
        },
        {
        "name": "show_az", 
        "value": true,
        "bind": {"input": "checkbox", "name": "Azimuthal Equal Area"}
        },
        {   
        "name": "show_conic", 
        "value": true,
        "bind": {"input": "checkbox", "name": "Conic Conformal"}
        },
        {
        "name": "show_mercator", 
        "value": true,
        "bind": {"input": "checkbox", "name": "Mercator"}
        },
        {
        "name": "show_ortho", 
        "value": true,
        "bind": {"input": "checkbox", "name": "Orthographic"}
        },
        {
        "name": "show_stereo", 
        "value": true,
        "bind": {"input": "checkbox", "name": "Stereographic"}
        },

        // turning on and off all the grids at the same time
        { 
        "name": "show_grid",
        "value": true,
        "bind": { "input": "checkbox", "name": "Show grid"}
        }
    ],
    

    "data": [
        // creating automatic data of the projection's coordinate lines
        {
        "name": "graticule",
        "transform": [
            {
            "type": "graticule",
            "step": [5, 5],
            "extent": [[-180, -90], [180, 90]]
            }
        ]
        },
        // json Brazil
        {
        "name": "brazil",
        "url": "data/brazil_geo.json",
        "format": {"type": "json", "property": "features"}
        }
    ],

    // defining each projection
    "projections": [
    {
    "name": "proj_albers",
    "type": "albers",
    "fit": {"data": "brazil"},
    "scale": {"signal": "zoom"},
    "rotate": [0, 0, 0],
    "center": {"signal": "br_center"},
    "translate": [
        {"signal": "width/2"}, 
        {"signal": "height/2"}
    ]
    },
    {
    "name": "proj_az",
    "type": "azimuthalEqualArea",
    "fit": {"data": "brazil"},
    "scale": {"signal": "zoom"},
    "rotate": [0, 0, 0],
    "center": {"signal": "br_center"},
    "translate": [
        {"signal": "width/2"}, 
        {"signal": "height/2"}
    ]
    },
    {
    "name": "proj_conic",
    "type": "conicConformal",
    "fit": {"data": "brazil"},
    "scale": {"signal": "zoom"},
    "rotate": [0, 0, 0],
    "center": {"signal": "br_center"},
    "translate": [
        {"signal": "width/2"}, 
        {"signal": "height/2"}
    ]
    },
    {
    "name": "proj_mercator",
    "type": "mercator",
    "fit": {"data": "brazil"},
    "scale": {"signal": "zoom"},
    "rotate": [0, 0, 0],
    "center": {"signal": "br_center"},
    "translate": [
        {"signal": "width/2"}, 
        {"signal": "height/2"}
    ]
    },
    {
    "name": "proj_ortho",
    "type": "orthographic",
    "fit": {"data": "brazil"},
    "scale": {"signal": "zoom"},
    "rotate": [0, 0, 0],
    "center": {"signal": "br_center"},
    "translate": [
        {"signal": "width/2"}, 
        {"signal": "height/2"}
    ]
    },
    {
    "name": "proj_stereo",
    "type": "stereographic",
    "fit": {"data": "brazil"},
    "scale": {"signal": "zoom"},
    "rotate": [0, 0, 0],
    "center": {"signal": "br_center"},
    "translate": [
        {"signal": "width/2"}, 
        {"signal": "height/2"}
    ]
    }
    ],

    "marks": [
        // printing grid
        {
        "type": "shape",
        "from": {"data": "graticule"},
        "encode": {
            "update": {
            "stroke": {"signal": "albers_color"},
            "strokeWidth": {"value": 0.6},
            "strokeOpacity": {"signal": "(show_albers && show_grid) ? grid_opacity : 0"}
            }
        },
        "transform": [{
            "type": "geoshape", 
            "projection": "proj_albers"
        }]
        },
        {
        "type": "shape",
        "from": {"data": "graticule"},
        "encode": {
            "update": {
            "stroke": {"signal": "az_color"},
            "strokeWidth": {"value": 0.6},
            "strokeOpacity": {"signal": "(show_az && show_grid) ? grid_opacity : 0"}
            }
        },
        "transform": [{
            "type": "geoshape", 
            "projection": "proj_az"
        }]
        },
        {
        "type": "shape",
        "from": {"data": "graticule"},
        "encode": {
            "update": {
            "stroke": {"signal": "conic_color"},
            "strokeWidth": {"value": 0.6},
            "strokeOpacity": {"signal": "(show_conic && show_grid) ? grid_opacity : 0"}
            }
        },
        "transform": [{
            "type": "geoshape", 
            "projection": "proj_conic"
        }]
        },
        {
        "type": "shape",
        "from": {"data": "graticule"},
        "encode": {
            "update": {
            "stroke": {"signal": "mercator_color"},
            "strokeWidth": {"value": 0.6},
            "strokeOpacity": {"signal": "(show_mercator && show_grid) ? grid_opacity : 0"}
            }
        },
        "transform": [{
            "type": "geoshape", 
            "projection": "proj_mercator"
        }]
        },
        {
        "type": "shape",
        "from": {"data": "graticule"},
        "encode": {
            "update": {
            "stroke": {"signal": "ortho_color"},
            "strokeWidth": {"value": 0.6},
            "strokeOpacity": {"signal": "(show_ortho && show_grid) ? grid_opacity : 0"}
            }
        },
        "transform": [{
            "type": "geoshape", 
            "projection": "proj_ortho"
        }]
        },
        {
        "type": "shape",
        "from": {"data": "graticule"},
        "encode": {
            "update": {
            "stroke": {"signal": "stereo_color"},
            "strokeWidth": {"value": 0.6},
            "strokeOpacity": {"signal": "(show_stereo && show_grid) ? grid_opacity : 0"}
            }
        },
        "transform": [{
            "type": "geoshape", 
            "projection": "proj_stereo"
        }]
        },

        // printing projections
        {
        "type": "shape",
        "from": {"data": "brazil"},
        "encode": {
            "update": {
                "strokeWidth": {"value": 2},
                // "stroke": {"value": "rgba(0,0,0,1)"},
                "fill": {"signal": "albers_color"},
                "blend": {"signal": "br_blend"},
                "fillOpacity": {"signal": "show_albers ? br_opacity: 0"}, 
            }
        },
        "transform": [{
            "type": "geoshape", 
            "projection": "proj_albers"
        }]
        },
        {
        "type": "shape",
        "from": {"data": "brazil"},
        "encode": {
            "update": {
                "strokeWidth": {"value": 0},
                "fill": {"signal": "az_color"},
                "blend": {"signal": "br_blend"},
                "fillOpacity": {"signal": "show_az ? br_opacity : 0"}, 
            }
        },
        "transform": [{
            "type": "geoshape", 
            "projection": "proj_az"
        }]
        },
        {
        "type": "shape",
        "from": {"data": "brazil"},
        "encode": {
            "update": {
                "strokeWidth": {"value": 0},
                "fill": {"signal": "conic_color"},
                "blend": {"signal": "br_blend"},
                "fillOpacity": {"signal": "show_conic ? br_opacity : 0"},
            }
        },
        "transform": [{
            "type": "geoshape", 
            "projection": "proj_conic"
        }]
        },
        {
        "type": "shape",
        "from": {"data": "brazil"},
        "encode": {
            "update": {
                "strokeWidth": {"value": 0},
                "fill": {"signal": "mercator_color"},
                "blend": {"signal": "br_blend"},
                "fillOpacity": {"signal": "show_mercator ? br_opacity : 0"},
            }
        },
        "transform": [{
            "type": "geoshape", 
            "projection": "proj_mercator"
        }]
        },
        {
        "type": "shape",
        "from": {"data": "brazil"},
        "encode": {
            "update": {
                "strokeWidth": {"value": 0},
                "fill": {"signal": "ortho_color"},
                "blend": {"signal": "br_blend"},
                "fillOpacity": {"signal": "show_ortho ? br_opacity : 0"},
            }
        },
        "transform": [{
            "type": "geoshape", 
            "projection": "proj_ortho"
        }]
        },
        {
        "type": "shape",
        "from": {"data": "brazil"},
        "encode": {
            "update": {
                "strokeWidth": {"value": 0},
                "fill": {"signal": "stereo_color"},
                "blend": {"signal": "br_blend"},
                "fillOpacity": {"signal": "show_stereo ? br_opacity : 0"}, 
            }
        },
        "transform": [{
            "type": "geoshape", 
            "projection": "proj_stereo"
        }]
        }
    ]
};

vegaEmbed(
    '#vis', 
    spec, 
    {actions: false}
).catch(console.error);
