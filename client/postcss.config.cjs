const plugins = { autoprefixer: {} }

try {
  // Only include Tailwind if it's installed. This lets installs succeed in
  // environments where Tailwind isn't available or not yet added.
  require.resolve('tailwindcss')
  plugins.tailwindcss = {}
} catch (e) {
  // tailwindcss not installed — skip it
}

module.exports = { plugins }
