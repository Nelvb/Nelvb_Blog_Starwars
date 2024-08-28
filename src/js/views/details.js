import React from 'react';
import PropTypes from 'prop-types';

export const Details = ({ details, type }) => {
    // Usamos directamente el uid que debería estar en el objeto details
    const uid = details.uid;

    // Ajustamos el tipo de recurso para la URL de la imagen
    const imageType = type === 'people' ? 'characters' : type;
    const imageUrl = `https://starwars-visualguide.com/assets/img/${imageType}/${uid}.jpg`;

    console.log('URL de la imagen:', imageUrl);

    const renderDetails = () => {
        switch (type) {
            case 'people':
                return (
                    <>
                        <p>Altura: {details.height} cm</p>
                        <p>Peso: {details.mass} kg</p>
                        <p>Color de cabello: {details.hair_color}</p>
                        <p>Color de piel: {details.skin_color}</p>
                        <p>Color de ojos: {details.eye_color}</p>
                        <p>Año de nacimiento: {details.birth_year}</p>
                        <p>Género: {details.gender}</p>
                    </>
                );
            case 'vehicles':
                return (
                    <>
                        <p>Model: {details.model}</p>
                        <p>Manufacturer: {details.manufacturer}</p>
                        <p>Cost in Credits: {details.cost_in_credits}</p>
                        <p>Length: {details.length} m</p>
                        <p>Crew: {details.crew}</p>
                        <p>Passengers: {details.passengers}</p>
                        <p>Cargo Capacity: {details.cargo_capacity} kg</p>
                    </>
                );
            case 'planets':
                return (
                    <>
                        <p>Climate: {details.climate}</p>
                        <p>Diameter: {details.diameter} km</p>
                        <p>Gravity: {details.gravity}</p>
                        <p>Population: {details.population}</p>
                        <p>Terrain: {details.terrain}</p>
                        <p>Surface Water: {details.surface_water}%</p>
                    </>
                );
            default:
                return <p>No hay detalles disponibles.</p>;
        }
    };

    return (
        <div className="details-container">
            <div className="details-image-container">
                <img
                    src={imageUrl}
                    alt={details.name}
                    className="details-image"
                    onError={(e) => {
                        console.log('Error cargando la imagen:', e.target.src);
                        e.target.style.display = 'none';
                    }}
                />
            </div>
            <div className="details-info">
                <h1>{details.name}</h1>
                {renderDetails()}
            </div>
        </div>
    );
};

Details.propTypes = {
    details: PropTypes.object.isRequired,
    type: PropTypes.string.isRequired,
};