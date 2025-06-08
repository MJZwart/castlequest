import {defineConfig, presetWind3, presetAttributify, presetTypography} from 'unocss';

export default defineConfig({
    presets: [presetWind3(), presetAttributify(), presetTypography()],
    shortcuts: {
        printquest: 'w-18rem h-15rem flex flex-col text-center border-1 border-black border-solid pt-10 pb-2 px-5 justify-center mb-2',
    },
    theme: {
        colors: {

        }
    }
});