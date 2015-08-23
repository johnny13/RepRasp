# coding=utf-8
from __future__ import absolute_import

### (Don't forget to remove me)
# This is a basic skeleton for your plugin's __init__.py. You probably want to adjust the class name of your plugin
# as well as the plugin mixins it's subclassing from. This is really just a basic skeleton to get you started.

import octoprint.plugin
import flask

class RepraspPlugin(octoprint.plugin.StartupPlugin,
                    octoprint.plugin.TemplatePlugin,
                    octoprint.plugin.SettingsPlugin,
                    octoprint.plugin.AssetPlugin,
                    octoprint.plugin.BlueprintPlugin):
    def get_assets(self):
         return dict(
             js=["js/reprasp_dashboard.js","libs/jstorage.min.js"],
             css=["css/octoprint_reprasp.css"]
         )
         
    @octoprint.plugin.BlueprintPlugin.route("/echo", methods=["GET"])
    def myEcho(self):
            if not "text" in flask.request.values:
                return flask.make_response("Expected a text to echo back.", 400)
            return flask.request.values["text"]
    
    @octoprint.plugin.BlueprintPlugin.route("/", methods=["GET"])
    def miniUi(self):
            from flask import render_template
            return render_template("reprasp_ui_index.jinja2")
            
    @octoprint.plugin.BlueprintPlugin.route("/control.html", methods=["POST"])
    def miniUiControlls(self):
            from flask import render_template
            return render_template("reprasp_ui_control.jinja2")
            
    @octoprint.plugin.BlueprintPlugin.route("/status.html", methods=["POST"])
    def miniUiStatus(self):
            from flask import render_template
            return render_template("reprasp_ui_status.jinja2")
            
    @octoprint.plugin.BlueprintPlugin.route("/print.html", methods=["POST"])
    def miniUiPrint(self):
            from flask import render_template
            return render_template("reprasp_ui_print.jinja2")
    
    @octoprint.plugin.BlueprintPlugin.route("/settings.html", methods=["POST"])
    def miniUiPrint(self):
            from flask import render_template
            return render_template("reprasp_ui_settings.jinja2")
            
    @octoprint.plugin.BlueprintPlugin.route("/terminal.html", methods=["POST"])
    def miniUiPrint(self):
            from flask import render_template
            return render_template("reprasp_ui_terminal.jinja2")
            
    def on_after_startup(self):
            self._logger.info("RepRasp UI Loaded! (more: %s)" % self._settings.get(["miniurl"]))
            
    def get_settings_defaults(self):
            return dict(url="https://www.huement.com",apiurl="/plugin/reprasp/echo?apikey=##API##&text=##TEXT##",miniurl="/plugin/reprasp/?apikey=##API##",iframeurl="testthis")
            #iframeurl=flask.url_for("plugin.reprasp.myEcho"),
            #apiurl="reprasp/echo/?name=test"
            
    def get_template_configs(self):
        return [
            dict(type="navbar", custom_bindings=False),
            dict(type="settings", custom_bindings=False)
        ]

         
__plugin_name__ = "RepRasp UI"
__plugin_implementation__ = RepraspPlugin()