/**
 * ACE Editor entry point for the RCloud bundle.
 *
 * This file documents the ACE editor bundle structure. The ACE editor files
 * are wrapped in an IIFE (_begin.js / _end.js) that isolates ACE's internal
 * require/define from the global RequireJS to prevent conflicts.
 *
 * During the build, the Vite plugin concatenates these files to produce
 * ace_bundle.js, preserving the AMD isolation wrapper.
 *
 * Bundle: ace_bundle.js
 * Modules: 26 files covering ACE core, themes, language modes, and extensions
 */

// ACE AMD isolation wrapper (begin)
// - htdocs/lib/js/ace/_begin.js

// ACE core
// - htdocs/lib/js/ace/ace.js

// Theme
// - htdocs/lib/js/ace/theme-chrome.js

// Language modes
// - htdocs/lib/js/ace/mode-r.js
// - htdocs/lib/js/ace/rmarkdown_highlight_rules.js
// - htdocs/lib/js/ace/rmarkdown.js
// - htdocs/lib/js/ace/r_highlight_rules.js
// - htdocs/lib/js/ace/r_matching_brace_outdent.js
// - htdocs/lib/js/ace/r_code_model.js
// - htdocs/lib/js/ace/r_scope_tree.js
// - htdocs/lib/js/ace/tex_highlight_rules.js
// - htdocs/lib/js/ace/mode-markdown.js
// - htdocs/lib/js/ace/mode-javascript-jup.js
// - htdocs/lib/js/ace/mode-python.js
// - htdocs/lib/js/ace/mode-perl.js
// - htdocs/lib/js/ace/mode-julia.js
// - htdocs/lib/js/ace/mode-java.js
// - htdocs/lib/js/ace/mode-golang.js
// - htdocs/lib/js/ace/mode-scala.js
// - htdocs/lib/js/ace/mode-sh.js

// RCloud-specific extensions
// - htdocs/lib/js/ace/auto_brace_insert.js
// - htdocs/lib/js/ace/jupyter_completions.js
// - htdocs/lib/js/ace/sweave_background_highlighter.js

// ACE extensions
// - htdocs/lib/js/ace/ext-language_tools.js
// - htdocs/lib/js/ace/ext-searchbox.js

// ACE AMD isolation wrapper (end)
// - htdocs/lib/js/ace/_end.js

export default {};
