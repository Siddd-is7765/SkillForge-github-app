// Simple recommender stub: in production this would use ML or heuristics.
const Course = require('../models/Course')

exports.recommendForUser = async (user) => {
  // Recommend by interest or recent courses — placeholder
  if (!user) return []
  const interests = user.interests || []
  const q = interests.length ? { category: { $in: interests } } : {}
  return Course.find(q).limit(10)
}
