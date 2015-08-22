# coding=utf-8
from __future__ import absolute_import

import octoprint.plugin

class HelloWorldPlugin(octoprint.plugin.StartupPlugin,
                       octoprint.plugin.TemplatePlugin):
    def on_after_startup(self):
        self._logger.info("RepRasp UI Enabled")

__plugin_name__ = "RepRasp"
__plugin_implementation__ = RepRaspPlugin()