import keys from '../../config/keys';

export default async (req, res) => {
    const places = "ChIJXz49AztvOIgRP1U6eizBBOY"
    api_key = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${places}&key=${keys.googleMapsApiKey}`
    const reviews = await axios.get('')
    res.status(200).json({ name: 'John Doe' })
  }