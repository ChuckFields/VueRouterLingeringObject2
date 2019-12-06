module.exports = {
  configureWebpack: config => {
      const terserOptions = {
        keep_classnames: true, //Prevent discarding or mangling of class names
        keep_fnames: true //Prevent discarding or mangling of function names
      };
      config.optimization.minimizer[0].options.terserOptions = {
        ...config.optimization.minimizer[0].options.terserOptions,
        ...terserOptions
      };
  },
};
