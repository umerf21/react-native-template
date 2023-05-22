export const presets = ['module:metro-react-native-babel-preset'];
export const plugins = [
  [
    'module-resolver',
    {
      root: ['./src'],
      extensions: [
        '.ios.ts',
        '.android.ts',
        '.ts',
        '.ios.tsx',
        '.android.tsx',
        '.tsx',
        '.jsx',
        '.js',
        '.json',
      ],
      alias: {
        '~': './src',
        '@screens': './src/screens',
        '@components': './src/components/index',
        '@utils': './src/shared/utils/*',
        '@hooks': './src/shared/hooks/*',
        '@store': './src/store/*',
        '@slices': './src/store/slices/*',
        '@contexts': './src/shared/contexts/*',
        '@types': './src/types/*',
        '@assets': './src/assets/*',
        '@images': './src/assets/images/*',
        '@navigator': './src/navigator/*',
        '@constant': './src/shared/constant/index',
        '@theme': './src/theme/index',
      },
    },
  ],
  'react-native-reanimated/plugin',
];
