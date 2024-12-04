@echo off
echo Sending 10 requests to http://localhost:8080...
for /L %%i in (1,1,10) do (
    curl -s http://localhost:8080
    echo.
)
echo All requests sent. Press any key to exit.
pause >nul
