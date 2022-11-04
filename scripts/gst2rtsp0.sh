#!/bin/bash
      sleep 3;
      path=`ls /dev/v4l/by-path/|grep index0| head -1 |tail -1`
      gst-launch-1.0   -q v4l2src device="/dev/v4l/by-path/${path}" !  nvvidconv ! 'video/x-raw(memory:NVMM),width=720, pixel-aspect-ratio=1/1, add-borders=true, framerate=30/1, format=NV12' ! nvv4l2h265enc bitrate=720000 peak-bitrate=1280000  !   rtspclientsink  location=rtsp://localhost:8554/c0
      
