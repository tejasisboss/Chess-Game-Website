<xsl:stylesheet version = "1.0" xmlns:xsl ="http://www.w3.org/1999/XSL/Transform">
<xsl:template match = "/games">
<html>
    <body>
        <h2>Best Games</h2>
        <xsl:for-each select="games/game">
  <div style="background-color:teal;color:white;padding:4px">
    <span style="font-weight:bold"><xsl:value-of select="name"/> - </span>
    <xsl:value-of select="price"/>
    </div>
  <div style="margin-left:20px;margin-bottom:1em;font-size:10pt">
    <p>
    <xsl:value-of select="desc"/>
    <!-- <span style="font-style:italic"> (<xsl:value-of select="calories"/> calories per serving)</span> -->
    </p>
  </div>
</xsl:for-each>
    </body>
</html>
</xsl:template>

</xsl:stylesheet>