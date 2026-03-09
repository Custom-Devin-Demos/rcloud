import { defineConfig } from 'vite';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const version = fs.readFileSync('VERSION', 'utf-8').split('\n')[0];

// Bundle file lists (migrated from Gruntfile.js)
const bundleFiles = [
    "htdocs/js/rcloud.js",
    "htdocs/js/rclient.js",
    "htdocs/js/url_utils.js",
    "htdocs/js/ui_utils.js",
    "htdocs/js/utils.js",
    "htdocs/js/extension.js",
    "htdocs/js/bootstrap_utils.js",
    "htdocs/js/notebook/_notebook_begin.js",
    "htdocs/js/notebook/_buffer_begin.js",
    "htdocs/js/notebook/_cell_begin.js",
    "htdocs/js/notebook/_asset_begin.js",
    "htdocs/js/notebook/buffer_model.js",
    "htdocs/js/notebook/asset_view.js",
    "htdocs/js/notebook/asset_model.js",
    "htdocs/js/notebook/asset_controller.js",
    "htdocs/js/notebook/cell_view.js",
    "htdocs/js/notebook/cell_model.js",
    "htdocs/js/notebook/cell_controller.js",
    "htdocs/js/notebook/cell_processors.js",
    "htdocs/js/notebook/notebook_view.js",
    "htdocs/js/notebook/notebook_model.js",
    "htdocs/js/notebook/notebook_controller.js",
    "htdocs/js/notebook/util.js",
    "htdocs/js/discovery_model.js",
    "htdocs/js/notebook.js",
    "htdocs/js/session.js",
    "htdocs/js/language.js",
    "htdocs/js/upload_utils.js",
    "htdocs/js/ui/_begin.js",
    "htdocs/js/event.js",
    "htdocs/js/ui/advanced_menu.js",
    "htdocs/js/ui/cell_commands.js",
    "htdocs/js/ui/column.js",
    "htdocs/js/ui/column_sizer.js",
    "htdocs/js/ui/command_prompt.js",
    "htdocs/js/ui/comments_frame.js",
    "htdocs/js/ui/configure_readonly.js",
    "htdocs/js/ui/fatal_dialog.js",
    "htdocs/js/ui/find_replace.js",
    "htdocs/js/ui/shortcut_manager.js",
    "htdocs/js/ui/shortcut_dialog.js",
    "htdocs/js/ui/ace_shortcuts.js",
    "htdocs/js/ui/help_frame.js",
    "htdocs/js/ui/image_manager.js",
    "htdocs/js/ui/import_export.js",
    "htdocs/js/ui/pull_and_replace.js",
    "htdocs/js/ui/init.js",
    "htdocs/js/ui/left_panel.js",
    "htdocs/js/ui/load_options.js",
    "htdocs/js/ui/menus.js",
    "htdocs/js/ui/message_dialog.js",
    "htdocs/js/ui/middle_column.js",
    "htdocs/js/ui/navbar.js",
    "htdocs/js/ui/notebook_commands.js",
    "htdocs/js/ui/selection_bar.js",
    "htdocs/js/ui/notebook_title.js",
    "htdocs/js/ui/notebooks_frame.js",
    "htdocs/js/ui/output_context.js",
    "htdocs/js/ui/panel_loader.js",
    "htdocs/js/ui/progress.js",
    "htdocs/js/ui/prompt_history.js",
    "htdocs/js/ui/right_panel.js",
    "htdocs/js/ui/processing_queue.js",
    "htdocs/js/ui/run_button.js",
    "htdocs/js/ui/stop_button.js",
    "htdocs/js/ui/scratchpad.js",
    "htdocs/js/ui/search.js",
    "htdocs/js/ui/session_pane.js",
    "htdocs/js/ui/settings_frame.js",
    "htdocs/js/ui/share_button.js",
    "htdocs/js/ui/upload.js",
    "htdocs/js/ui/upload_frame.js",
    "htdocs/js/ui/thumb_dialog.js",
    "htdocs/js/ui/notebook_protection_logger.js",
    "htdocs/js/ui/notebook_protection.js",
    "htdocs/js/ui/discovery_page.js",
    "htdocs/js/tree/notebook_tree_search_service.js",
    "htdocs/js/ui/incremental_search.js",
    "htdocs/js/tree/date_filter.js",
    "htdocs/js/tree/notebook_tree_model.js",
    "htdocs/js/tree/notebook_tree_view.js",
    "htdocs/js/tree/notebook_tree_controller.js"
];

const aceFiles = [
    "htdocs/lib/js/ace/_begin.js",
    "htdocs/lib/js/ace/ace.js",
    "htdocs/lib/js/ace/theme-chrome.js",
    "htdocs/lib/js/ace/mode-r.js",
    "htdocs/lib/js/ace/rmarkdown_highlight_rules.js",
    "htdocs/lib/js/ace/rmarkdown.js",
    "htdocs/lib/js/ace/auto_brace_insert.js",
    "htdocs/lib/js/ace/r_highlight_rules.js",
    "htdocs/lib/js/ace/r_matching_brace_outdent.js",
    "htdocs/lib/js/ace/r_code_model.js",
    "htdocs/lib/js/ace/r_scope_tree.js",
    "htdocs/lib/js/ace/jupyter_completions.js",
    "htdocs/lib/js/ace/tex_highlight_rules.js",
    "htdocs/lib/js/ace/mode-markdown.js",
    "htdocs/lib/js/ace/sweave_background_highlighter.js",
    "htdocs/lib/js/ace/ext-language_tools.js",
    "htdocs/lib/js/ace/ext-searchbox.js",
    "htdocs/lib/js/ace/mode-javascript-jup.js",
    "htdocs/lib/js/ace/mode-python.js",
    "htdocs/lib/js/ace/mode-perl.js",
    "htdocs/lib/js/ace/mode-julia.js",
    "htdocs/lib/js/ace/mode-java.js",
    "htdocs/lib/js/ace/mode-golang.js",
    "htdocs/lib/js/ace/mode-scala.js",
    "htdocs/lib/js/ace/mode-sh.js",
    "htdocs/lib/js/ace/_end.js"
];

const mergerFiles = [
    "htdocs/js/ui/notebook_merger/notebook_merge.js",
    "htdocs/js/ui/notebook_merger/diff_engine.js",
    "htdocs/js/ui/notebook_merger/merger_model.js",
    "htdocs/js/ui/notebook_merger/merger_view.js",
    "htdocs/js/ui/notebook_merger/merger_controller.js"
];

const scssEntries = [
    { input: 'htdocs/sass/rcloud.scss', output: 'css/rcloud.css' },
    { input: 'htdocs/sass/rcloud-edit.scss', output: 'css/rcloud-edit.css' },
    { input: 'htdocs/sass/rcloud-view.scss', output: 'css/rcloud-view.css' },
    { input: 'htdocs/sass/rcloud-discover.scss', output: 'css/rcloud-discover.css' },
    { input: 'htdocs/sass/rcloud-viewer.scss', output: 'css/rcloud-viewer.css' },
];

/**
 * Custom Vite plugin that replaces Grunt's build pipeline:
 * - Concatenates JS files in order (like grunt-contrib-concat)
 * - Replaces Grunt template expressions
 * - Minifies with terser (like grunt-contrib-uglify)
 * - Generates gzip (like grunt-contrib-compress)
 * - Compiles SASS (like grunt-sass)
 */
function rcloudBuildPlugin() {
    return {
        name: 'rcloud-build',

        async generateBundle() {
            const { minify } = await import('terser');
            const { gzipSync } = await import('zlib');
            const sass = await import('sass');

            // --- JS Bundle Generation ---
            const jsBundles = [
                { files: bundleFiles, name: 'rcloud_bundle', outDir: 'js' },
                { files: aceFiles, name: 'ace_bundle', outDir: 'lib' },
                { files: mergerFiles, name: 'merger_bundle', outDir: 'js' },
            ];

            for (const bundle of jsBundles) {
                let concatenated = '';
                for (const file of bundle.files) {
                    let src = fs.readFileSync(path.resolve(__dirname, file), 'utf-8');
                    // Replace Grunt template expressions
                    src = src.replace(/<%= conf\.version %>/g, version);
                    concatenated += src + '\n';
                }

                const baseName = `${bundle.outDir}/${bundle.name}`;

                // Emit concatenated (unminified) bundle
                this.emitFile({
                    type: 'asset',
                    fileName: `${baseName}.js`,
                    source: concatenated,
                });

                // Generate and emit source map for concatenated bundle
                // (Vite/Rollup will handle this implicitly for the minified version)

                // Minify with terser
                const minResult = await minify(concatenated, {
                    sourceMap: true,
                    mangle: true,
                    compress: true,
                });

                if (minResult.code) {
                    this.emitFile({
                        type: 'asset',
                        fileName: `${baseName}.min.js`,
                        source: minResult.code,
                    });
                }

                if (minResult.map) {
                    this.emitFile({
                        type: 'asset',
                        fileName: `${baseName}.min.js.map`,
                        source: minResult.map,
                    });
                }

                // Generate gzip versions
                this.emitFile({
                    type: 'asset',
                    fileName: `${baseName}.js.gz`,
                    source: gzipSync(Buffer.from(concatenated)),
                });

                if (minResult.code) {
                    this.emitFile({
                        type: 'asset',
                        fileName: `${baseName}.min.js.gz`,
                        source: gzipSync(Buffer.from(minResult.code)),
                    });
                }
            }

            // --- SASS Compilation ---
            for (const entry of scssEntries) {
                const result = sass.compile(path.resolve(__dirname, entry.input), {
                    style: 'compressed',
                    sourceMap: true,
                });

                this.emitFile({
                    type: 'asset',
                    fileName: entry.output,
                    source: result.css,
                });

                if (result.sourceMap) {
                    this.emitFile({
                        type: 'asset',
                        fileName: entry.output + '.map',
                        source: JSON.stringify(result.sourceMap),
                    });
                }
            }
        },
    };
}

export default defineConfig({
    build: {
        outDir: path.resolve(__dirname, 'htdocs'),
        emptyOutDir: false,
        // We use a minimal entry point; the real work is done by the plugin
        rollupOptions: {
            input: path.resolve(__dirname, 'htdocs/js/main.js'),
            output: {
                // Prevent Rollup from generating its own bundle output
                // (we handle everything in the plugin)
                entryFileNames: '_build_entry.js',
            },
        },
        // Disable default minification (we handle it in the plugin)
        minify: false,
        sourcemap: true,
    },
    plugins: [rcloudBuildPlugin()],
});
