L.esri.ImageServerLayer = L.esri.DynamicMapLayer.extend({
  _getImageUrl: function () {
    var size = this._map.getSize();

    this._layerParams.bbox = this._map.getBounds().toBBoxString();
    this._layerParams.size = size.x + ',' + size.y;

    var url = this.serviceUrl + 'exportImage' + L.Util.getParamString(this._layerParams);

    return url;
  }
});

L.esri.imageServerLayer = function (url, options) {
  return new L.esri.ImageServerLayer(url, options);
};