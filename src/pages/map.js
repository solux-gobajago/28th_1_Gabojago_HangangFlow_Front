import React, { useEffect } from 'react';

const MapComponent = () => {
  useEffect(() => {
    const mapContainer = document.getElementById('map');
    const mapOption = {
      center: new window.kakao.maps.LatLng(37.566826, 126.9786567),
      level: 3,
    };

    const map = new window.kakao.maps.Map(mapContainer, mapOption);

    const ps = new window.kakao.maps.services.Places(map);

    ps.categorySearch('BK9', placesSearchCB, { useMapBounds: true });

    function placesSearchCB(data, status, pagination) {
      if (status === window.kakao.maps.services.Status.OK) {
        for (let i = 0; i < data.length; i++) {
          displayMarker(data[i]);
        }
      }
    }

    function displayMarker(place) {
      const marker = new window.kakao.maps.Marker({
        map: map,
        position: new window.kakao.maps.LatLng(place.y, place.x),
      });

      window.kakao.maps.event.addListener(marker, 'click', function () {
        const infowindow = new window.kakao.maps.InfoWindow({ zIndex: 1 });
        infowindow.setContent(
          `<div style="padding:5px;font-size:12px;">${place.place_name}</div>`
        );
        infowindow.open(map, marker);
      });
    }
  }, []);

  return <div id="map" style={{ width: '100%', height: '350px' }} />;
};

export default MapComponent;
