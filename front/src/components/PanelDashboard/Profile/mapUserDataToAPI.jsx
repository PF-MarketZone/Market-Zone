export function mapUserDataToAPI(idData, userData) {
    // Realiza la transformación de datos aquí
    const transformedData = {
      _id: idData,
      name: userData.name,
      last_name: userData.last_name,
      age: parseFloat(userData.age) || null,
      phoneNumber: parseFloat(userData.phoneNumber) || null,
      address: {
        street: userData.address.street || "",
        streetNumber: parseFloat(userData.address.streetNumber) || null,
        postalCode: parseFloat(userData.address.postalCode) || null,
        townNeighborhood: userData.address.townNeighborhood || "",
        floorApartment: userData.address.floorApartment || "",
        city: userData.address.city || "",
      },
      shippingAddress: userData.shippingAddress.map((address) => ({
        street: address.street || "",
        streetNumber: parseFloat(address.streetNumber) || null,
        postalCode: parseFloat(address.postalCode) || null,
        townNeighborhood: address.townNeighborhood || "",
        floorApartment: address.floorApartment || "",
        city: address.city || "",
      })),
    };
  
    return transformedData;
  }