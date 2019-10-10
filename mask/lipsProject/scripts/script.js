const NativeUI = require('NativeUI')
const Scene = require('Scene');
const Textures = require('Textures');
const Patches = require('Patches');

const texture1 = Textures.get('usta');
const texture2 = Textures.get('usta2');
const texture3 = Textures.get('usta3');


const picker = NativeUI.picker;

const index = 0;

const configuration = {

    selectedIndex: index,

    items: [
        {image_texture: texture1},
        {image_texture: texture2},
        {image_texture: texture3},

    ]
};

picker.configure(configuration);
picker.visible = true;

picker.selectedIndex.monitor().subscribe(function(index) {
    Patches.setScalarValue('PickerIndex', index.newValue);
});
