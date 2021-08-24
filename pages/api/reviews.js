export default async (req, res) => {
    const places = "ChIJXz49AztvOIgRP1U6eizBBOY"
    api_key = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${places}&key=${process.env.GOOGLE_MAPS_API_KEY}`
    const reviews = await axios.get('')
    res.status(200).json({ name: 'John Doe' })
  }