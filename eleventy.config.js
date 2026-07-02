module.exports = function(eleventyConfig) {
  // Configurar Liquid para que sea compatible con Jekyll (archivos sin comillas en include)
  eleventyConfig.setLiquidOptions({
    dynamicPartials: false
  });

  // Copiar archivos estáticos directamente a la carpeta de salida (_site)
  eleventyConfig.addPassthroughCopy("estilos");
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy("imagenes");
  eleventyConfig.addPassthroughCopy("videos");
  eleventyConfig.addPassthroughCopy("cv");
  eleventyConfig.addPassthroughCopy("proyectos_realizados");

  return {
    dir: {
      input: ".",
      includes: "_includes",
      layouts: "_layouts",
      output: "_site"
    }
  };
};
