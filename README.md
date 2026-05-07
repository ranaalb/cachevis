# CacheVis

CacheVis is an interactive cache analysis dashboard built with React and Recharts. It runs entirely in the browser with no backend. The dashboard visualizes cache behavior from real production traces using an LRU cache simulation.

## Overview

`cache-dashboard.jsx` is a single-file React component that contains the full CacheVis interface, including:

- State management
- Chart rendering
- Time-window selection
- Y-axis zooming
- Per-object cache access analysis
- Embedded preprocessed trace data

The dataset is stored directly in the file as a JavaScript constant, so the dashboard does not make any network requests.

## Tech Stack

- React
- Recharts
- JavaScript
- Browser-based frontend only

## Data

The dashboard uses preprocessed cache trace data with:

- 5.2M total cache accesses
- ~1M unique objects
- LRU cache size of 10,000 slots
- Windowed cache metrics
- Sampled request trace data
- Per-object access histories

## Main Features

### Full Request Trace

Shows sampled cache accesses over virtual time. Each point represents an object request, with time on the x-axis and object ID on the y-axis.

### Time Window Selection

A draggable slider lets users select a specific time range. The selected window updates the charts below and highlights the corresponding region on the full request trace.

### Miss Ratio Over Time

Shows how the cache miss ratio changes across the full trace. This helps identify intervals where cache performance is poor.

### Cache Hits

Shows the number of cache hits within the selected time window.

### Zoomed Request View

Shows the detailed request pattern within the selected time window.

### Per-Object View

Allows users to inspect the hottest objects in the trace and see when specific objects were accessed over time.

## How the Dashboard Works

When the user drags the time slider:

1. The selected time range updates.
2. The dashboard filters the windowed cache data.
3. The zoomed scatter plot updates.
4. The cache hits chart updates.
5. The red selection band moves on the full trace.

When the user drags the Y-axis zoom bar:

1. The object ID range updates.
2. The scatter plots remount with the new Y-axis domain.
3. The visible object range changes.

## File Structure

The main dashboard logic is contained in:

```txt
src/cache-dashboard.jsx

## How the Dashboard Works
1. npm install
2. npm run dev
