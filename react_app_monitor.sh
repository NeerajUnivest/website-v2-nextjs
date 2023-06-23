start_app() {
  echo "Starting React app..."
  npm run start
}

while true; do
  if ! pgrep -f "npm run start" >/start/null; then
    echo "React app is not running. Restarting..."
    start_app
  fi
  sleep 5
done