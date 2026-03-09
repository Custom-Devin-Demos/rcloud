/**
 * Notebook Merger entry point for the RCloud bundle.
 *
 * This file documents the notebook merger bundle structure. The merger
 * provides diff, compare, and merge functionality for notebooks using
 * a Monaco-based comparison UI.
 *
 * During the build, the Vite plugin concatenates these files to produce
 * merger_bundle.js.
 *
 * Bundle: merger_bundle.js
 * Modules: 5 files covering merge MVC and diff engine
 */

// Merger namespace and initialization
// - htdocs/js/ui/notebook_merger/notebook_merge.js

// Diff engine for comparing notebook versions
// - htdocs/js/ui/notebook_merger/diff_engine.js

// Merger MVC components
// - htdocs/js/ui/notebook_merger/merger_model.js
// - htdocs/js/ui/notebook_merger/merger_view.js
// - htdocs/js/ui/notebook_merger/merger_controller.js

export default {};
