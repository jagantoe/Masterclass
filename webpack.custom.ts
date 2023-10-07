import { Configuration } from 'webpack';

export default {
    module: {
        rules: [
            {
                test: /\.html$/i,
                use: [
                    {
                        loader: 'html-loader',
                    },
                ],
            },
        ],
    },
} as Configuration;
